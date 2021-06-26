import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './containers/OnboardingScreen';
import LogIn from './containers/LogIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {Navigator, Screen} = createStackNavigator();

const App = () => {
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
      <NavigationContainer>
        <Navigator>
          <Screen component={OnboardingScreen} name="OnboardingScreen" options={{headerShown:false}}/>
          <Screen component={LogIn} name="LogIn" />
        </Navigator>
      </NavigationContainer>
    );
  } else return <LogIn />;
};

export default App;
