import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import Icons from 'react-native-vector-icons/Ionicons'
import FavScreen from "../screens/favsScreen";


const RouterTabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = '';

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'md-home-sharp'
                        : 'md-home-outline';
                }
                else if (route.name === 'Favorites') {
                    iconName = focused ? 'heart-sharp' : 'heart-outline';
                }
                else if (route.name === 'Detail') {
                    iconName = focused ? 'ios-sync-circle-sharp' : 'ios-sync-circle-outline';
                }

                // You can return any component that you like here!
                return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FFD233',
            tabBarInactiveTintColor: '#8C8C8C',
            tabBarActiveBackgroundColor: '#000000',
            tabBarInactiveBackgroundColor: '#000000'
        })}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerTransparent: true, headerTitle: 'Home', headerTintColor: "#8C8C8C",
                headerTitleAlign: 'center'
            }} />
            <Tab.Screen name="Favorites" component={FavScreen} options={{
                headerTransparent: true, headerTitle: 'Favorites', headerTintColor: "#8C8C8C",
                headerTitleAlign: 'center'
            }} />
            <Tab.Screen name="Detail" component={DetailScreen}  options={{
                headerTransparent: true, headerTitle: 'Recents', headerTintColor: "#8C8C8C",
                headerTitleAlign: 'center'
            }} />
        </Tab.Navigator>
    )

}

export default RouterTabs