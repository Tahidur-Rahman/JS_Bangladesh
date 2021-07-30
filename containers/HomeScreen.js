import React, {useContext, useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Text, Dimensions, FlatList} from 'react-native';
import FormButton from '../components/FormButton';
import {PEXELS_API, PEXELS_API_URL} from '../config/API';
import {AuthContext} from '../navigation/AuthProvider';
import {screen} from '../styles/Containers';
const {width, height} = Dimensions.get('window');
const SMALL_IMG = 80;
const SPACING = 10;

const HomeScreen = () => {
  const [images, setimages] = useState();
  const [activeIndex, setActiveIndex] = useState();
  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetch(PEXELS_API_URL, {
        headers: {
          Authorization: PEXELS_API,
        },
      });
      if (data.ok) {
        const {photos} = await data.json();
        setimages(photos);
      } else {
        Alert.alert('Data is not loaded');
      }
      console.log(data);
    };
    fetchImages();
  }, []);
  const {logout} = useContext(AuthContext);
  const topRef = useRef();
  const bottomRef = useRef();
  const scrollToActiveIndex = index => {
    setActiveIndex(index);
    console.log(topRef?.current);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    console.log(bottomRef?.current)
    if (index * (SMALL_IMG + SPACING) - SMALL_IMG / 2 > width / 2 || index<3) {
      bottomRef?.current?.scrollToOffset({
        offset: index * (SMALL_IMG + SPACING) - width / 2 + SMALL_IMG / 2,
        animated: true,
      });
    }
   
  };
  if (!images) {
    return (
      <View style={screen}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={screen}>
      <StatusBar hidden />
      <FlatList
        data={images}
        ref={topRef}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.src.portrait}}
                style={StyleSheet.absoluteFillObject}
              />
            </View>
          );
        }}
      />
      <FlatList
        data={images}
        ref={bottomRef}
        horizontal
        keyExtractor={item => item.id}
        style={{position: 'absolute', bottom: 20}}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.src.portrait}}
                style={{
                  height: SMALL_IMG,
                  width: SMALL_IMG,
                  borderRadius: SPACING,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex == index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
