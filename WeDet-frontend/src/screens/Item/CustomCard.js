import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomCard(props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
                {props?.title}
            </Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#E9F3ED",
        height:150,
        margin:10,
        width:300,
        borderRadius:30
    },
    cardHeader:{
        backgroundColor:'#D7EADD',
        height:40,
        borderRadius:30,
        borderBottomLeftRadius:0,
        
    },
    cardTitle:{
        fontSize: 20,
        fontWeight: 600,
        marginStart:30
    }
})