import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput } from "react-native"

const AppContainer = ()=>{
    return (
       <SafeAreaView>
           <ScrollView>
                <View style={style.container}>
                      
                    <View style={style.forInput}>
                        <TextInput style={style.textInput} placeholder="Search"/>
                    </View>  
                    <View>
                    <Image style={{marginTop: 15}} resizeMode={'cover'} source={require('../../../assets/Images/wedet_lg.png')}/>  
                    </View> 
                    <View>
                        <Image style={{marginTop: 15}} resizeMode={'cover'} source={require('../../../assets/Images/alert.png')}/>    
                    </View>                                
                </View>
                <View>
                    <Text style={style.myTitle}>Home Screen</Text>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create ({
    container: {
                flex: 1,
                flexDirection: "row",
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
    },
    myTitle: {
        fontSize: 50,
        textAlign: 'center', 
        marginTop: 10,
    },
    forInput: {
        marginTop: 15,
        padding: 10,
    }, 
    textInput: {
        fontSize: 16,
        padding: 10,
    }
})

export default AppContainer;