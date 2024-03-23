import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/authentication/Login';
import Signup from './src/authentication/Signup';
import Home from './src/Home';
import ForgotPassword from './src/authentication/ForgotPassword';
import FeedPage from './src/pages/FeedPage';
import MatchInfo from './src/pages/MatchInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
        <Stack.Screen name="MatchInfo" component={MatchInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
