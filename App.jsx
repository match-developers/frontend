import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/authentication/Login';
import Signup from './src/authentication/Signup';
import Home from './src/Home';
import ForgotPassword from './src/authentication/ForgotPassword';
import FeedPage from './src/pages/FeedPage';
import MatchInfo from './src/pages/MatchInfo';
<<<<<<< HEAD
import {ClubTransfer} from './src/components/Post/content/ClubTransfer';
=======
import LeagueTable from './src/components/Post/LeagueTable';
>>>>>>> 060040f260e7d8e3622af23e2443097d718cf362

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Feed" component={FeedPage} />
        <Stack.Screen name="MatchInfo" component={MatchInfo} />
<<<<<<< HEAD
        <Stack.Screen name="ClubTransfer" component={ClubTransfer} />
=======
        <Stack.Screen name="LeagueTable" component={LeagueTable} />
>>>>>>> 060040f260e7d8e3622af23e2443097d718cf362
      </Stack.Navigator>
    </NavigationContainer>
  );
}
