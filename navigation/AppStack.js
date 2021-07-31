import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../containers/HomeScreen';
import AnimationTwo from '../containers/AnimationTwo';
const {Navigator, Screen} = createStackNavigator();

const AppStack = () => {
 
    return (
      <Navigator>
        <Screen component={AnimationTwo} name="AnimationTwo"  options={{headerShown:false}}/>
        <Screen component={HomeScreen} name="HomeScreen"  options={{headerShown:false}}/>
      </Navigator>
    );
};

export default AppStack;
