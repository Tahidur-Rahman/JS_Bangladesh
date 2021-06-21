import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { screen } from '../styles/Containers'
import { title } from '../styles/Typography'

function Welcome() {
    return (
        <View style={screen}>
            <Text style={title}>জাভাস্ক্রিপ্ট বাংলাদেশ অ্যাপে স্বাগতম</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})


export default Welcome
