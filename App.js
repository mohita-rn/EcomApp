/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeNavigation from './navigation/HomeNavigation';
import {LogBox} from 'react-native';

function App() {
  console.disableYellowBox = true;
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}

export default App;
