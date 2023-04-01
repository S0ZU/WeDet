import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native';
const Login = () => {
    return (<SafeAreaView>
        <ScrollView>
            <View>
            <Image source={require('C:\Users\ASUS\Desktop\Maduri\Maduri\WeDet\assets\Company.jpg')} style={{width:150, height:30,alignSelf:'center',marginLeft:30}} />
            </View>
            <View style={styles.container}>
                <Text style={{fontSize:50, fontWeight:'bold',marginLeft:20,marginTop:10}}>Say Goodbye to Weeds</Text>
                <Text style={{alignSelf:'flex-start', fontSize:20, paddingLeft:20,marginBottom:50,marginLeft:20}}>Keep Your Crops Flourishing</Text>
                <Image source={require ('C:\Users\ASUS\Desktop\Maduri\Maduri\WeDet\assets\Logo.jpg')} style={{width:300, height:350,}} />
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
        borderRadius: 20,
        padding: 10,
        width: 200,
        elevation: 2,
    },
    buttonClose: {
        marginTop: 30,
        backgroundColor: '#C8D9CE',
    },
    textStyle: {
        textAlign: 'center'
    }
});
export default Login;