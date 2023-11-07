import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from '../screens/Tabs/HomeTabScreen';
import CategoryTabScreen from '../screens/Tabs/CategoryTabScreen';
import FavoriteTabScreen from '../screens/Tabs/FavoriteTabScreen';
import MoreTabScreen from '../screens/Tabs/MoreTabScreen';
import CustomBottomTab from '../components/BottomTabs/CustomBottomTab';
import HomeNavigation from './HomeNavigation';

export default function BottomTabNavigator(props) {
    const Tab = createBottomTabNavigator();
    const hide = props.routeName != "Profile"
  return (
    <Tab.Navigator tabBar={rest => <CustomBottomTab  {...rest}/>} >
        <Tab.Group screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeTabScreen} options={{tabBarLabel: 'Home'}}/>
            <Tab.Screen name="Categories" component={CategoryTabScreen} options={{tabBarLabel: 'Categories'}}/>
            <Tab.Screen name="Favourite" component={FavoriteTabScreen} options={{tabBarLabel: 'Favourite'}}/>
            <Tab.Screen name="More" component={MoreTabScreen} options={{tabBarLabel: 'More'}}/>
        </Tab.Group>
    </Tab.Navigator>
  )
}