import React from 'react';
import {
  SafeAreaView, View,Text,StyleSheet
} from 'react-native';

import Welcome from './containers/Welcome';
import { title } from './styles/Typography';

const App = () => {

  return (
    <View style={styles.screen}>
    <Text style={title}>জাভাস্ক্রিপ্ট বাংলাদেশ অ্যাপে স্বাগতম</Text>
</View>
  );
};

const styles = StyleSheet.create({
  screen:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
  }
})

export default App;
