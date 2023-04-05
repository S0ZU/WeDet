import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import CustomCard from './CustomCard';

export default function WeedResults() {
  return (
    <SafeAreaView >
      <ScrollView>
        <Text style={styles.title}>
          Today
        </Text>
        <CustomCard title={'Weed 01'}/>
        <CustomCard title={'Weed 02'}/>

        <Text style={styles.title}>
          Yesterday
        </Text>
        <CustomCard title={'Weed 03'}/>
        <CustomCard title={'Weed 04'}/>

        <Text style={styles.title}>
          Recent
        </Text>
        <CustomCard title={'Weed 05'}/>
        <CustomCard title={'Weed 06'}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 10,
    },
    text: {
      fontSize: 42,
    },
    title:{
        fontSize: 20,
        fontWeight: 800,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        margin: 10,

    },
    
  });