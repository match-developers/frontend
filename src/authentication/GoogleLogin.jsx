import React from 'react';
import {StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {useNavigation} from '@react-navigation/native';

import {googleLogin} from '../services/axios';

const GoogleLogin = () => {
  const navigation = useNavigation();
  const handleGoogleLogin = async accessToken => {
    try {
      googleLogin(accessToken);
      navigation.navigate('FeedPage');
    } catch (error) {
      console.error(error);
    }
  };
  const signInWithGoggle = async () => {
    try {
      GoogleSignin.configure({
        scopes: ['profile', 'email'],
        webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
      });

      await GoogleSignin.hasPlayServices();
      const {idToken, serverAuthCode} = await GoogleSignin.signIn();

      handleGoogleLogin(serverAuthCode);

      // // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      return idToken;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <GoogleSigninButton
      style={styles.googleSignInButton}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signInWithGoggle}
    />
  );
};

const styles = StyleSheet.create({
  googleSignInButton: {
    width: 192,
    height: 48,
  },
});

export default GoogleLogin;
