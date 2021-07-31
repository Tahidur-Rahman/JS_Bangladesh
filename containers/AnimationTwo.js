import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});
console.log(faker);
const SPACING = 15;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING*3;

export default AnimationTwo = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <Image source={{uri:"https://cdn.wallpapersafari.com/64/0/ma7yrc.jpg"}}
      style={StyleSheet.absoluteFillObject}/>
      <Animated.FlatList
      onScroll={Animated.event(
          [{nativeEvent:{contentOffset:{y:scrollY}}}],
          {useNativeDriver:true}
      )}
        data={DATA}
        contentContainerStyle={{
            padding:SPACING,
            paddingTop:StatusBar.height || 42
        }}
        keyExtractor={item => item.key}
        renderItem={({item,index}) => {
            const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ];
            const scale = scrollY.interpolate({
                inputRange,
                outputRange:[1,1,1,0]
            })
            const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ];
            const opacity = scrollY.interpolate({
                inputRange:opacityInputRange,
                outputRange:[1,1,1,0]
            })
          return (
            <Animated.View style={{flexDirection:'row',padding:SPACING,marginVertical:SPACING,backgroundColor:"rgba(255,255,255,0.9)",borderRadius:12,
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.3,
            shadowRadius:20,
            opacity,
            transform:[{scale}]}}>
              <Image
                source={{uri: item.image}}
                style={{
                  height: AVATAR_SIZE,
                  width: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight:10
                }}
              />
              <View >
                  <Text style={{fontSize:20,fontWeight:"700"}}>{item.name}</Text>
                  <Text style={{fontSize:18,opacity:0.8,}}>{item.jobTitle}</Text>
                  <Text style={{fontSize:16,opacity:0.7,color:'#0099cc'}}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
