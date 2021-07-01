import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../containers/OnboardingScreen'
import LogIn from '../containers/LogIn'
import AsyncStorage from '@react-native-async-storage/async-storage';
const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

 
 if (isFirstLaunch) {
    return (
        <Navigator>
          <Screen component={OnboardingScreen} name="OnboardingScreen" options={{headerShown:false}}/>
          <Screen component={LogIn} name="LogIn" />
        </Navigator>
    );
  } else return <LogIn />;
};

export default AuthStack;
