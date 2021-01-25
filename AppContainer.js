import React from 'react';
import AppStack from './src/navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppContainer;
