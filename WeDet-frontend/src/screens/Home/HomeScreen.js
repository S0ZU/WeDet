import { SafeAreaView, ScrollView, StyleSheet, View, Image, TextInput, Text } from "react-native";
//import { style } from './styles';

const Home = ()=>{
    return (
       <SafeAreaView>
           <ScrollView>

                {/* Contains the logo, the search bar & the notification icon */}
                <View style={style.topContainer}>   
                    <View>
                        <Image style={style.logo} resizeMode={'cover'} source={require('../../../assets/Images/wedet_lg.png')}/>  
                    </View> 
                    <View>
                        <TextInput style={style.textInput} underlineColorAndroid='transparent' placeholder="Search"/>
                    </View>  
                    <View>
                        <Image style={style.icon} resizeMode={'cover'} source={require('../../../assets/Images/alert.png')}/>    
                    </View>                 
                </View>

                {/* Images of vegetable fields */}
                <View>
                    <Image style={style.mainImage} resizeMode="cover" source={require('../../../assets/Images/vegefield.png')}/>
                </View> 
                
                {/* Images of several weeds */}
                <View style={style.bottomContainer}>
                    <View>
                        <Text style={{fontSize: 25, fontWeight: "bold"}}>Popular Weeds</Text>
                    </View>

                    <View style={style.weedContainer}>
                        <View>
                            <Image style={style.weeds} resizeMode="cover" source={require('../../../assets/Images/apple_tree.png')}/>
                        </View> 
                        <View>
                            <Image style={style.weeds} resizeMode="cover" source={require('../../../assets/Images/mango_tree.png')}/>
                        </View>                                           
                    </View>

                    <View style={style.weedContainer}>
                        <View>
                            <Image style={style.weeds} resizeMode="cover" source={require('../../../assets/Images/guava_tree.png')}/>
                        </View> 
                        <View>
                            <Image style={style.weeds} resizeMode="cover" source={require('../../../assets/Images/cocnut_tree.png')}/>
                        </View>                                           
                    </View>
                </View>     

            </ScrollView>
        </SafeAreaView>
    )
};

const style = StyleSheet.create ({
    topContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: 40,
        // backgroundColor: "#8fe3c3",
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
      padding: 10  
    },
    weedContainer: {
        flexDirection: "row"
    },
    weeds: {
        margin: 10,
        borderRadius: 10,
        height: 200,
        width: 170
    }
});

export default Home;