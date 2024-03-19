import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

import {emailLogin, facebookLogin, googleLogin} from '../services/axios';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setloggedIn] = useState(false);

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

      googleLogin(serverAuthCode);
      setloggedIn(true);

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

  const signOutGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = () => {
    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      {/* Email and Password Input Fields */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        onBlur={validateEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        onBlur={validatePassword}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TouchableOpacity onPress={goToForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[
          styles.button,
          emailError || passwordError ? styles.disabledButton : null,
        ]}
        onPress={() => emailLogin(email, password)}
        disabled={Boolean(emailError || passwordError)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View style={styles.orContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.error('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                let accessToken = data.accessToken;

                facebookLogin(data.accessToken);

                const responseInfoCallback = (err, res) => {
                  if (err) {
                    console.log(err);
                    console.error('Error fetching data: ' + err.toString());
                  } else {
                    console.log(res);
                    console.log('Success fetching data: ' + res.toString());
                  }
                };

                const infoRequest = new GraphRequest(
                  '/me',
                  {
                    accessToken: accessToken,
                    parameters: {
                      fields: {
                        string: 'email,name,first_name,middle_name,last_name',
                      },
                    },
                  },
                  responseInfoCallback,
                );

                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }}
          onLogoutFinished={() => console.log('Implement Facebook Logout')}
        />
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <GoogleSigninButton
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 192, height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signInWithGoggle}
            />
          </View>
          <View style={styles.buttonContainer}>
            {!loggedIn && <Text>You are currently logged out</Text>}
            {loggedIn && (
              <Button onPress={signOutGoogle} title="Log Out" color="red" />
            )}
          </View>
        </View>
        {/* Add buttons for other social providers as needed */}
      </View>

      {/* Text for not a user */}
      <View style={styles.signupContainer}>
        <Text>Not a user? </Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.signupText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  socialButtonsContainer: {
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: 'blue',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  forgotPassword: {
    fontSize: 17,
    fontStyle: 'italic',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
});

export default LoginScreen;
