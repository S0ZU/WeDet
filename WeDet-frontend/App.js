import { NavigationContainer } from '@react-navigation/native';

//import nav
import Tabs from './src/navigations/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>

  );
}