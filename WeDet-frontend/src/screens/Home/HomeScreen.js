import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, style, View, Image, TextInput, Text } from "react-native";
// import { styles } from './styles';

const Home = ()=>{
    return (
       <SafeAreaView>
           <ScrollView>

                {/* Contains the logo, the search bar & the notification icon */}
                <View style={styles.topContainer}>   
                    <View>
                        <Image style={styles.logo} resizeMode={'cover'} source={require('../../../assets/Images/wedet_lg.png')}/>  
                    </View> 
                    <View>
                        <TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder="Search"/>
                    </View>  
                    <View>
                        <Image style={styles.icon} resizeMode={'cover'} source={require('../../../assets/Images/alert.png')}/>    
                    </View>                 
                </View>

                {/* Images of vegetable fields */}
                <View>
                    <Image style={styles.mainImage} resizeMode="cover" source={require('../../../assets/Images/vegefield.png')}/>
                </View> 
                
                {/* Images of several weeds */}
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.textStyle}>Popular Weeds</Text>
                    </View>

                    <View style={styles.weedContainer}>
                        <View>
                            <Image style={styles.imageStyle} resizeMode="cover" source={require('../../../assets/Images/Bajiri.jpg')}/>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 70, textAlign: 'auto'}}>Bajiri</Text>
                            </View>
                        </View> 
                        <View>
                            <Image style={styles.imageStyle} resizeMode="cover" source={require('../../../assets/Images/Neeramulliya.jpg')}/>
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'auto', marginLeft: 40}}>Neeramulliya</Text>
                        </View>                                           
                    </View>

                    <View style={styles.weedContainer}>
                        <View>
                            <Image style={styles.imageStyle} resizeMode="cover" source={require('../../../assets/Images/Nidikumba.jpg')}/>
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 50, textAlign: 'auto'}}>Nidikumba</Text>
                        </View> 
                        <View>
                            <Image style={styles.imageStyle} resizeMode="cover" source={require('../../../assets/Images/Pigweed.png')}/>
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'auto', marginLeft: 60}}>Pigweed</Text>
                        </View>                                           
                    </View>
                </View>     
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create ({
    topContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: 40,
        maxHeight: 120
    },
    logo: {
        maxHeight: 25,
        maxWidth: 25,
        marginTop: 20,
    }, 
    icon: {
        maxHeight: 25,
        maxWidth: 25,
        marginTop: 20,
    },      
    textInput: {
        fontSize: 16,
        padding: 10,
        margin: 15,
        height: 40,
        width: 300,
        borderWidth: 1,
        borderColor: "#c9ced6",
        borderRadius: 20,
    },
    mainImage: {
        height: 400,
        borderRadius: 5
    },
    bottomContainer: {
        paddingTop: 20,
        paddingLeft: 15
    },
    weedContainer: {
        flexDirection: "row",
        paddingBottom: 10,
        paddingTop: 10  
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    imageStyle: {
        margin: 10,
        borderRadius: 10,
        height: 200,
        width: 170
    }
});

export default Home;