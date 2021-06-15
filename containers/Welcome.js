import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { title } from '../styles/Typography'

function Welcome() {
    return (
        <View style={styles.screen}>
            <Text style={title}>জাভাস্ক্রিপ্ট বাংলাদেশ অ্যাপে স্বাগতম</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})


export default Welcome
