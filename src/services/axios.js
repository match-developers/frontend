import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';

async function _convertToken(accessToken, backend) {
  try {
    const response = await axios.post(
      `${Config.BACKEND_URL}/api-auth/convert-token`,
      {
        token: accessToken,
        backend,
        grant_type: 'convert_token',
        client_id: Config.BACKEND_APPLICATION_CLIENT_ID,
        client_secret: Config.BACKEND_APPLICATION_CLIENT_SECRET,
      },
    );
    return await AsyncStorage.setItem(
      'access_token',
      response.data.access_token,
    );
  } catch (error) {
    return await Promise.reject(error);
  }
}

export async function emailLogin(email, password) {
  try {
    const response = await axios.post(`${Config.BACKEND_URL}/api-auth/token`, {
      username: email,
      password,
      grant_type: 'password',
      client_id: Config.BACKEND_APPLICATION_CLIENT_ID,
      client_secret: Config.BACKEND_APPLICATION_CLIENT_SECRET,
    });
    return await AsyncStorage.setItem(
      'access_token',
      response.data.access_token,
    );
  } catch (error) {
    return await Promise.reject(error);
  }
}

export function facebookLogin(accessToken) {
  _convertToken(accessToken, 'facebook');
}

export function googleLogin(accessToken) {
  _convertToken(accessToken, 'google-oauth2');
}

axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    if (typeof error.response === 'undefined') {
      console.error('a server error happened, we will fix it shortly');
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !AsyncStorage.getItem('refresh_token')
    ) {
      window.location.href = '/login/';
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized' &&
      AsyncStorage.getItem('refresh_token') !== undefined
    ) {
      const refreshToken = AsyncStorage.getItem('refresh_token');

      return axios
        .post(`${Config.BACKEND_URL}/api-auth/token`, {
          client_id: Config.BACKEND_APPLICATION_CLIENT_ID,
          client_secret: Config.BACKEND_APPLICATION_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        })
        .then(response => {
          AsyncStorage.setItem('access_token', response.data.access_token);
          AsyncStorage.setItem('refresh_token', response.data.refresh_token);
          window.location.reload();
          axios.defaults.headers.Authorization =
            'Bearer ' + response.data.access_token;
        })
        .catch(err => console.log(err));
    }
  },
);

export async function logout() {
  // Google logout
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }

  // Facebook logout
  try {
    LoginManager.logOut();
  } catch (error) {
    console.error(error);
  }

  return AsyncStorage.removeItem('access_token');
}
