import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabScreen from '../screens/Tabs/HomeTabScreen';
import DetailScreen from '../screens/Details/DetailScreen';
import CartScreen from '../screens/Cart/CartScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

export default function HomeNavigation({ navigation, route }) {
    const HomeStack = createNativeStackNavigator();

  //   useLayoutEffect(() => {
  //     const routeName = getFocusedRouteNameFromRoute(route);
  //     console.log('routeName', routeName);
  //     if (routeName == "Home" ) {
  //     navigation.setOptions({ tabBarVisible: true });
  //     } else {
  //     navigation.setOptions({ tabBarVisible: false });
  //     }
  // }, [navigation, route]);

  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={BottomTabNavigator} />
        <HomeStack.Screen name="Details" component={DetailScreen} />
        <HomeStack.Screen name="Cart" component={CartScreen} />
    </HomeStack.Navigator>
  )
}