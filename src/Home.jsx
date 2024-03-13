import React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import background from '../public/images/lebronbackground.png';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Match</Text>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
          />
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomePage;
