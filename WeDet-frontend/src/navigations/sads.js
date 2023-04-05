import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
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
          borderRadius: 15,
          height: 60,
          ...styles.shadow
        },
        headerShown: false,
        tabBarItemStyle: {
          width: 60,
          height: 60,
          borderRadius: 30,
          top: -25,
          ...styles.shadow
        },
        tabBarIconStyle: {
          height: 60,
          width: 60,
        }
      }}
    >
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabBarItem,
                { backgroundColor: focused ? '#01B763' : '#ffffff' },
              ]}
            >
              <Image
                source={require('../../assets/icons/camera.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#ffffff' : '#498553',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  top: -25,
                }}
              />
            </View>
          ),
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
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;
