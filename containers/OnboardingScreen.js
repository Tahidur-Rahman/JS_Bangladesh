import React from 'react';
import {Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {image} from '../styles/Containers';

const Dot = ({selected}) => (
  <View
    style={{
      width: 8,
      height: 8,
      borderRadius: 2,
      backgroundColor: selected ? '#111' : '#888',
      marginRight:15
    }}></View>
);

function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      DotComponent={Dot}
      onSkip={() => navigation.replace('LogIn')}
      onDone={() => navigation.navigate('LogIn')}
      pages={[
        {
          backgroundColor: '#f1f1f1',
          image: (
            <Image
              source={require('../assets/images/hello.png')}
              style={image()}
            />
          ),
          title: 'Hi !',
          subtitle: 'Welcome to JS Bangladesh !',
        },
        {
          backgroundColor: '#E3BAC6',
          image: (
            <Image
              source={require('../assets/images/programming.png')}
              style={image()}
            />
          ),
          title: 'Learn to Program',
          subtitle:
            'Guided documentation will help you to learn JS programming .',
        },
        {
          backgroundColor: '#F6CA83',
          image: (
            <Image
              source={require('../assets/images/share_knowledge.png')}
              style={image()}
            />
          ),
          title: 'Learn to Program',
          subtitle: 'Help others to gather knowledge !',
        },
        {
          backgroundColor: '#D5F2E3',
          image: (
            <Image
              source={require('../assets/images/be_skilled.png')}
              style={image()}
            />
          ),
          title: 'Be a JS Ninja',
          subtitle: 'Best of luck',
        },
      ]}
    />
  );
}

export default OnboardingScreen;
