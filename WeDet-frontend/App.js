import { NavigationContainer } from '@react-navigation/native';

import React, { useState } from 'react';
import GetStartedScreen from './src/screens/Login/LoginScreen';

//import nav
import Tabs from './src/navigation/AppNavigation';

export default function App() {
  const [completedGetStarted, setCompletedGetStarted] = useState(false);
  if (!completedGetStarted) {
    return <GetStartedScreen onComplete={() => setCompletedGetStarted(true)} />;
  }
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>

  );
}