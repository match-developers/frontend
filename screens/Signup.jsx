import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

// Signup screen component
const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/accounts/signup/',
        {
          email: email,
          password: password,
        },
      );

      // Check if the response is successful (status code 2xx)
      if (response.status >= 200 && response.status < 300) {
        console.log('User signed up successfully');
        // Optionally, you can navigate the user to the login screen or perform other actions
        navigation.navigate('Login');
      } else {
        // Handle the case where the server returns an error
        console.error('Signup failed:', response.data);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during signup:', error);
    }
  };

  const handleSocialSignup = provider => {
    // Implement your social signup logic here
    // You might want to initiate the OAuth flow or use a third-party library
    console.log(`Social signup with ${provider} button pressed!`);
  };

  const goToLogin = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      {/* Email and Password Input Fields */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View style={styles.orContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>

      {/* Social Signup Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialSignup('Google')}>
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialSignup('Facebook')}>
          <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        {/* Add buttons for other social providers as needed */}
      </View>

      {/* Text for already a user */}
      <View style={styles.loginContainer}>
        <Text>Already a user? </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
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
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
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
});

export default SignupScreen;
