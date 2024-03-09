import axios from 'axios';
import Config from 'react-native-config';

function _convertToken(accessToken, backend) {
  axios
    .post(`${Config.BACKEND_URL}/api-auth/convert-token`, {
      token: accessToken,
      backend,
      grant_type: 'convert_token',
      client_id: Config.BACKEND_APPLICATION_CLIENT_ID,
      client_secret: Config.BACKEND_APPLICATION_CLIENT_SECRET,
    })
    .then(res => {
      // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
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
    const originalRequest = error;

    if (typeof error.response === 'undefined') {
      alert('a server error happened, we will fix it shortly');
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !localStorage.getItem('refresh_token')
    ) {
      window.location.href = '/login/';
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized' &&
      localStorage.getItem('refresh_token') !== undefined
    ) {
      const refreshToken = localStorage.getItem('refresh_token');

      return axios
        .post(`${Config.BACKEND_URL}/api-auth/token`, {
          client_id: Config.BACKEND_APPLICATION_CLIENT_ID,
          client_secret: Config.BACKEND_APPLICATION_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          window.location.reload();
          axiosInstance.defaults.headers['Authorization'] =
            'Bearer ' + response.data.access_token;
        })
        .catch(err => console.log(err));
    }
  },
);
