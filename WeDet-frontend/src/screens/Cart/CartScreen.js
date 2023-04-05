import React from "react";

import { Text,View,StyleSheet,ScrollView,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CartScreen = ()=>{
    return (

        <ScrollView>
        
    

        
        <View style={style.container}>

            <View style={{marginTop:40,marginHorizontal:120}}>
                <Text style={{fontSize: 20,color:'#01B763'}}>Buy Products </Text>
            </View>
            <View style={[style.card1,style.productOne]}>
                <Text>Glyphosate </Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/Glyphosate.png')}/>
                <Text style={{fontSize: 15,fontWeight:'bold'}}>Price - Rs.4400/L </Text>
            </View>
            <View style={[style.card,style.productTwo]}>
                <Text >Dicamba</Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/Dicamba.png')}/>
                <Text style={{fontSize: 15,fontWeight:'bold'}}>Price - Rs.3000/L </Text>
            </View>
            <View style={[style.card,style.productThree]}>
                <Text>MCPA</Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/MCPA.png')}/>
                   
            </View>
            <View>
                <Text style={{fontSize: 15,fontWeight:'bold',marginHorizontal:20,marginBottom:10}}>Price - Rs.2500/L </Text> 
            </View>
            
         </View>
         </ScrollView>

    )
}
 const style = StyleSheet.create ({
    
    
    
     card1:{
        height:30,
        width:200,
        borderRadius:8,
        marginHorizontal:20,
        marginTop:30
        },

    card:{
        height:30,
        width:200,
        borderRadius:8,
        marginHorizontal:20
    },

     productOne:{
        backgroundColor:'#D7EADD',
        padding:5,
        alignContent:"center",
        
        
        
     },

     productTwo:{
        backgroundColor:'#D7EADD',
        padding:5,
        marginTop:30
        
     },

     productThree:{
        backgroundColor:'#D7EADD',
        padding:5,
        marginTop:30
        
     },

     productFour:{
        backgroundColor:'#D7EADD',
        padding:5,
        marginTop:40

     },
     details:{
        height:200,
        width:200,
        borderRadius:5,
        marginHorizontal:20,
        
    },
    detailsOne:{
        backgroundColor:'#E9F3ED',
        
    },
    topic:{
        textAlign:"center",
        fontWeight:'bold',
        marginTop:50,
        marginHorizontal:120
        // backgroundColor:'#E9F3ED',

    },
    main:{
        fontWeight:'bold',
        fontSize:200,
        
    },
    image1:{
        width:180,
        height:180,
        margin:10,
        
        borderRadius:4
    }


    
      
 })
export default CartScreen;
