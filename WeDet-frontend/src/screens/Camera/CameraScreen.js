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
        setSelectedImage(result.uri);
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
            ref={cameraRef}
            ratio="4:3"
          ></Camera>
          <TouchableOpacity
            onPress={__goBack}
            style={[styles.backButton, { top: 40 }]}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={__takePicture}
            style={[styles.backButton, { top: 500 }]}
          >
            <Text style={styles.backButtonText}>Take</Text>
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
<<<<<<< Updated upstream
              source={{ uri: selectedImage.assets[0].uri }}
              style={{ width: '100%', height: '80%', marginTop: 20 }}
=======
              source={{ uri: selectedImage.uri }}
              style={{
                width: '100%', height: '80% ', marginTop: 20
              }}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    borderRadius: 4,
    backgroundColor: '#14274e',
=======
    height: 50,
    borderRadius:15,
    backgroundColor: '#01B763',
>>>>>>> Stashed changes
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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
    padding: 10,
    width: 60,
    height: 30,
    borderRadius:15,
    backgroundColor: '#01B763',
    alignItems: 'center',
  },
  backButtonIcon: {
    fontSize: 20,
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
