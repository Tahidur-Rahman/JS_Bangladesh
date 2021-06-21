import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Welcome from './containers/Welcome';
import 'react-native-gesture-handler';
import {screen} from './styles/Containers';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'blue'}}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'blue'}}>Settings!</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
