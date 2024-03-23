import React from 'react';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

import {useNavigation} from '@react-navigation/native';

import {facebookLogin, logout} from '../services/axios';

const FacebookLogin = () => {
  const navigation = useNavigation();
  const handleFacebookLogin = async accessToken => {
    try {
      facebookLogin(accessToken);
      navigation.navigate('FeedPage');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.error('login has error: ' + result.error);
        } else if (result.isCancelled) {
          console.log('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data.accessToken;

            handleFacebookLogin(data.accessToken);

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
      onLogoutFinished={() => logout()}
    />
  );
};

export default FacebookLogin;
