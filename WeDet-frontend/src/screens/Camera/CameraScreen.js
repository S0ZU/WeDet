
import React, { useCallback, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as FileSystem from 'expo-file-system';
import { predictImage } from '../../api';

const Tab = createBottomTabNavigator();

export default function CameraScreen() {
  const [startCamera, setStartCamera] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const cameraRef = useRef(null);

  const __startCamera = useCallback(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  }, [navigation]);

  const __openGallery = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status != 'granted') {
        Alert.alert('Access denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets);
        // Get the base64 representation of the image
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 });
        const data = await predictImage(base64);  
        console.log(data)
        setStartCamera(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, [navigation]);

  const __takePicture = useCallback(async () => {
    try {
      const photo = await cameraRef.current.takePictureAsync();
      setSelectedImage(photo.assets);
      setStartCamera(false);
      Alert.alert(
        'Picture Taken',
        '',
        [
          {
            text: 'Retake',
            onPress: () => {
              setSelectedImage(null);
              setStartCamera(true);
            },
          },
          {
            text: 'Save',
            onPress: () => {
              // add logic to save the image
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error(error);
    }
  }, [cameraRef, setSelectedImage, setStartCamera]);

  const __goBack = useCallback(() => {
    setStartCamera(false);
    setSelectedImage(null);
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={styles.cameraContainer}>
          <Camera
            style={{
              width: windowWidth,
              height: windowHeight,
            }}
            ref={(ref) => {
              cameraRef.current = ref;
            }}
            ratio="4:3"
          ></Camera>
          <TouchableOpacity onPress={__goBack} style={styles.backButton}>
            <Image
              source={require('../../../assets/icons/arrow.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 20,
                tintColor: '#ffffff',
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={__takePicture} style={styles.captureButton}>
            <View style={styles.iconWrapper}>
              <Image source={require('../../../assets/icons/capture.png')} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={__startCamera} style={styles.button}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={__openGallery} style={styles.button}>
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
          {selectedImage && (
            <View style={styles.previewContainer}>
              <Image
                source={{ assets: selectedImage }}
                style={styles.previewImage}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
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
  }, buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 2,
  },
  camera: {
    flex: 1,
    aspectRatio: 4 / 3,
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    marginBottom: 50,
    zIndex: 2,
  },
  iconWrapper: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#FFFFFF',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
