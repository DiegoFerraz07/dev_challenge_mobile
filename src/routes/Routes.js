import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../Register';
import Login from '../Login';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='login'>
             <Stack.Screen name='login' component={Login}
            options={{
                headerShown: false
            }} />
            <Stack.Screen name='register' component={Register}
            options={{
                
                title: '',
                headerTintColor: '#FFF',
                headerTransparent: true
            }} />
        </Stack.Navigator>
    );
}