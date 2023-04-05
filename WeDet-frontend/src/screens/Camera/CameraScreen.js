import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Platform } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

export default function CameraScreen() {
  const [startCamera, setStartCamera] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const navigation = useNavigation()

  const __startCamera = useCallback(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // Start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }, [navigation])

  const __openGallery = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.canceled) {
        setSelectedImage(result.uri);
        setStartCamera(false);
      }
    } else {
      Alert.alert('Access denied');
    }
  }, [navigation]);
  

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera
          style={{ flex: 1, width: "100%" }}
          ref={(r) => {
            camera = r
          }}
        ></Camera>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Take picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={__openGallery}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Open from gallery</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage.assets[0].uri }}
              style={{ width: '100%', height: '80%', marginTop: 20 }}
            />
          )}


        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#01B763',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
