import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
//import HomeScreen from './HomeScreen';
import WeedResults from './src/screens/Item/WeedResults';
//import AboutUs from './src/screens/About/AboutUs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='WeedResults'
          component={WeedResults}
          options={{
            headerTitle:'Weed Results',
            headerTintColor:'#01B763',
            headerTitleAlign:'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

       //<AboutUs/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

