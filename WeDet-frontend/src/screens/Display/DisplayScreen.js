import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

const BottomCover = () => {
    return (
      <View style={styles.cover}></View>
    );
  };

const Display = ()=>{
    return (
        <SafeAreaView>
            {/* <ScrollView> */}
            <View style={styles.weedContainer}>
                <View style={styles.imageContainer}>
                    {/* Passed a sample image. It should contain the image passed by the user(captured or selected 
                    from the galler) */}
                    <Image styles={styles.image} resizeMode="cover" source={require("../../../assets/Images/sampleImage.jpg")}/>
                </View>
                       
            </View>
            <BottomCover/> 
            
            {/* <View>
                <Text>HELLO</Text>
            </View> */}

            {/* </ScrollView> */}
                       
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    weedContainer: {
        backgroundColor: "#b4e197", 
        height: 900
    },
    image: {
        width: 50,
        height: 50,
        // overflow: "hidden",
        borderRadius: 10,
    },
    cover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 500,
        backgroundColor: 'white',
        borderRadius: 10
    }
});

export default Display;