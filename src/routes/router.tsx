import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootPagesParam from "../types/router.interface";
import SesionScreen from "../screens/Sesion/Sesion";
import RouterTabs from "./tabRouter";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator<RootPagesParam>()

const RouterMain = () => {
    const [initialRoute, setInitialRoute] = useState<keyof RootPagesParam>('Sesion')
    useEffect(() => {
        setInitialRoute('TabsHome')
        validSession()

    }, [initialRoute])

    const validSession = async () => {
        let session = await AsyncStorage.getItem('login')
        if (session === "1") {
            setInitialRoute('TabsHome')
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    initialRoute === 'Sesion' ?
                        <Stack.Screen name="Sesion" component={SesionScreen} options={{ headerShown: false }} />
                        :
                        <Stack.Screen name="TabsHome" component={RouterTabs} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>

    )

}

export default RouterMain