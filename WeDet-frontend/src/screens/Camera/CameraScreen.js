import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Platform } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

export default function CameraScreen() {
  const [startCamera, setStartCamera] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const navigation = useNavigation()
  const cameraRef = useRef(null)

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
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Access denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });

      if (!result.canceled) {
        setSelectedImage(result.assets);
        setStartCamera(false);
      }
    } catch (error) {
      console.error(error);
      // handle error
    }
  }, [navigation]);

  const __takePicture = useCallback(async () => {
    try {
      const photo = await cameraRef.current.takePictureAsync()
      setSelectedImage(photo)
    } catch (error) {
      console.error(error)
    }
  }, [cameraRef])

  const __goBack = useCallback(() => {
    setStartCamera(false)
    setSelectedImage(null)
  }, [])

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            ref={(r) => {
              camera = r
            }}
            ratio="4:3"
          ></Camera>
          <TouchableOpacity
            onPress={__goBack}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
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
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={__openGallery}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage.uri }}
              style={{
                width: '100%', height: '80% ', marginTop: 20
              }}
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
    justifyContent: 'center',
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#01B763',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  camera: {
    flex: 1,
    width: '100%',
    aspectRatio: 4 / 3
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#01B763',
    borderRadius: 5,
    padding: 10,
    fontWeight: 'bold',
  },
  backButtonIcon: {
    fontSize: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    color: '#000',
    fontSize: 14,
  },
});