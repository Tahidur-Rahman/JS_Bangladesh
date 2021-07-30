import React, { Component } from 'react'
import { Button, Image, View  } from 'react-native'
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker'

 class ImagePickerCustom extends Component {
    state = {
        photo: null,
      }
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        launchImageLibrary(options, response => {
          if (response.assets[0].uri) {
            this.setState({ photo: response.assets[0]  })
          }
        })
      }
    render() {
        const { photo } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri}}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
        )
    }
}

export default ImagePickerCustom
