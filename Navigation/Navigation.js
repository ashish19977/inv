import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CreateInvoice from '../screen/createInvoice';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const NavManager = ()=><NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='home' component={CreateInvoice}/>
    </Stack.Navigator>
</NavigationContainer>

export default NavManager