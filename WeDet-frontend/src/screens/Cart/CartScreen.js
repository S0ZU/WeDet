import React from "react";

import { Text,View,StyleSheet,ScrollView,Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CartScreen = ()=>{
    return (

        <ScrollView>
        
    

        
        <View style={style.container}>

            <View style={{fontSize: 25,fontWeight: "bold",marginTop:50,marginHorizontal:130}}>
                <Text>Buy Products </Text>
            </View>
            <View style={[style.card1,style.productOne]}>
                <Text>Glyphosate </Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
            {/* <Text>Rs.1000/= </Text> */}
                
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/Glyphosate.png')}/>
            </View>
            <View style={[style.card,style.productTwo]}>
                <Text>Shepherd's Purse</Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/Dicamba.png')}/>
            </View>
            <View style={[style.card,style.productThree]}>
                <Text>Quickweed</Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                
                <Image style={style.image1} resizeMode="cover" source={require('../../../assets/Images/MCPA.png')}/>
            </View>
            <View style={[style.card,style.productFour]}>
                <Text>Product 4</Text>
            </View>
            <View style={[style.details,style.detailsOne]}>
                <Text>Details4  </Text>
            </View>
            <View style={{fontSize:20}}>
                <Text>test  </Text>
            </View>
            
            
            

         </View>
         </ScrollView>

    )
}
 const style = StyleSheet.create ({
    
    
     container:{
        
     },

     card1:{
        height:30,
        width:200,
        borderRadius:8,
        marginHorizontal:20,
        marginTop:40
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
        marginTop:30

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
