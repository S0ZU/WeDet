import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import WeedResults from './WeedResults';

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    <View>
        <Button title='Go To Weed Results' onPress={() => navigation.navigate('WeedResults')}/>
    </View>
  )
}

const styles = StyleSheet.create({})