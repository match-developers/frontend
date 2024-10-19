/**
 * AppNavigator.js: Main navigation file containing all user-related routes.
 * 
 * Includes:
 * - User Profile, Stats, and Subsections (Follows, Clubs, Competitions, Reviews).
 * - Edit Profile screen and other relevant navigation routes from prior conversations.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importing screens and modals
import MainScreen from 'match/frontend/src/users/main/screen/Main';
import StatsMain from 'match/frontend/src/users/stats/screen/Main';
import Follows from 'match/frontend/src/users/stats/modal/Follows';
import Clubs from 'match/frontend/src/users/stats/modal/Clubs';
import Competitions from 'match/frontend/src/users/stats/modal/Competitions';
import Reviews from 'match/frontend/src/users/stats/modal/Reviews';
import UserOptionModal from 'match/frontend/src/users/main/modal/UserOptionModal';
import TestScreen from 'match/frontend/src/users/playstyle/screen/TestScreen';
import ResultScreen from 'match/frontend/src/users/playstyle/screen/ResultScreen';
import ClubMain from 'match/frontend/src/clubs/screen/Main';
import EditProfile from 'match/frontend/src/users/edit/screen/Main'; // Edit Profile screen

const Stack = createStackNavigator(); // Stack navigator instance

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        {/* User Main Screen */}
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        />

        {/* Stats Main Screen */}
        <Stack.Screen 
          name="StatsMain" 
          component={StatsMain} 
          options={{ headerShown: false }} 
        />

        {/* Follows Modal */}
        <Stack.Screen 
          name="Follows" 
          component={Follows} 
          options={{ presentation: 'modal', headerShown: false }} 
        />

        {/* Clubs Modal */}
        <Stack.Screen 
          name="Clubs" 
          component={Clubs} 
          options={{ presentation: 'modal', headerShown: false }} 
        />

        {/* Competitions Modal */}
        <Stack.Screen 
          name="Competitions" 
          component={Competitions} 
          options={{ presentation: 'modal', headerShown: false }} 
        />

        {/* Reviews Modal */}
        <Stack.Screen 
          name="Reviews" 
          component={Reviews} 
          options={{ presentation: 'modal', headerShown: false }} 
        />

        {/* User Option Modal */}
        <Stack.Screen 
          name="UserOptionModal" 
          component={UserOptionModal} 
          options={{ presentation: 'modal', headerShown: false }} 
        />

        {/* Playstyle Test Screen */}
        <Stack.Screen 
          name="TestScreen" 
          component={TestScreen} 
          options={{ headerShown: true, title: 'Playstyle Test' }} 
        />

        {/* Playstyle Result Screen */}
        <Stack.Screen 
          name="ResultScreen" 
          component={ResultScreen} 
          options={{ headerShown: true, title: 'Test Result' }} 
        />

        {/* Club Main Screen */}
        <Stack.Screen 
          name="ClubMain" 
          component={ClubMain} 
          options={{ headerShown: true, title: 'Club Profile' }} 
        />

        {/* Edit Profile Screen */}
        <Stack.Screen 
          name="EditProfile" 
          component={EditProfile} 
          options={{ headerShown: true, title: 'Edit Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;