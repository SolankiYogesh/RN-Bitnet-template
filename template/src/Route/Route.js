import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen from '../Helpers/Screen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen/LoginScreen';
import RegisterScreens from '../Screens/AuthScreens/RegisterScreen/RegisterScreens';
import HomeScreen from '../Screens/UserScreens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const Route = () => {
  const renderAuth = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={Screen.RegisterScreen}
          component={RegisterScreens}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.AuthFlow} component={renderAuth} />

        <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
