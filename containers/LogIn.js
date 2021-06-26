import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { screen } from '../styles/Containers'
import { title } from '../styles/Typography'

function LogIn() {
    return (
        <View style={screen}>
            <Text style={title}>Log In Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})


export default LogIn
