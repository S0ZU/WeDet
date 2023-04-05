import React from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import ItemsScreen from '../screens/Item/ItemScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import CameraScreen from '../screens/Camera/CameraScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: -4,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          ...styles.shadow,
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.23)',
        },
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused, color, size }) => {
          // custom icon component
        }
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#01B763' : '#498553',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/items.png')}
                resizeMode='contain'
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#01B763' : '#498553',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabBarItem,
                {
                  backgroundColor: '#01B763',
                  borderRadius: 50,
                  position: 'absolute',
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#01B763',
                  transform: [{ translateY: -20 }],
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                },
              ]}
            >
              <Image
                source={require('../../assets/icons/camera.png')}
                resizeMode='contain'
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? '#000000' : '#ffffff',

                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/cart.png')}
                resizeMode='contain'
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#01B763' : '#498553',
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/login.png')}
                resizeMode='contain'
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#01B763' : '#498553',
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  }
})

export default Tabs;