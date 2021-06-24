import React from 'react';
import {SafeAreaView, View, Text,Image} from 'react-native';

import Welcome from './containers/Welcome';
import 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { image } from './styles/Containers';

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
<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/images/hello.jpg')} style={image()}/>,
      title: 'Hi !',
      subtitle: 'Welcome to JS Bangladesh !',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/images/programming.jpg')} style={image()} />,
      title: 'Learn to Program',
      subtitle: 'Guided documentation will help you to learn JS programming .',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/images/share_knowledge.png')} style={image()}/>,
      title: 'Learn to Program',
      subtitle: 'Help others to gather knowledge !',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/images/be_skilled.png')} style={image()}/>,
      title: 'Be a JS Ninja',
      subtitle: 'Best of luck',
    },
  
  ]}
/>
   
  );
};

export default App;
