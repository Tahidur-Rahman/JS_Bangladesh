import React,{useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth'

function Routes() {
    const [user, setUser] = useState(AuthContext);
    const [initializing,setInitializing] = useState(true);
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        console.log(subscriber)
        return subscriber; 
      }, []);
      if (initializing) return null;
    return (
        <NavigationContainer>
            {user ? <AppStack/>: <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes
