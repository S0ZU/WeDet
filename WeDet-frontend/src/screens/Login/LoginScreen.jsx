import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native';
const Login = () => {
    return(
        <SafeAreaView>
        
            <ScrollView>
                <View>
                    <Image style={{width:200, height:50,alignSelf:'center',marginLeft:30,marginTop:60}} resizeMode={'cover'} source={require('../../../assets/Images/Company.jpg')}/>

                </View>
            <View style={styles.container}>
                <Text style={{fontSize:35, fontWeight:'bold',marginLeft:20,marginTop:10,}}>Say Goodbye to Weeds</Text>
                <Text style={{alignSelf:'flex-start', fontSize:20, paddingLeft:20,marginBottom:50,marginLeft:20,marginTop:15}}>Keep Your Crops Flourishing</Text>
                <View>
                    <Image style={{width:300, height:350,}} resizeMode={'cover'} source={require('../../../assets/Images/Home.png')}/>

                </View>

                <StatusBar style="auto" />
                <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { Navigation.navigate("Login"); } }>
              <Text style={styles.textStyle}>Get Started</Text>
            </Pressable>
            </View>
            </ScrollView>
        </SafeAreaView>
        
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
        borderRadius: 35,
        padding: 20,
        width: 200,
        elevation: 2,
    
    },
    buttonClose: {
        marginTop: 20,
        backgroundColor: '#01B763',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 27 ,
        
    }
});
export default Login;