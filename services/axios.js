import axios from 'axios';

export function facebookLogin(accessToken) {
  axios
    .post(`http://10.0.2.2:8000/api-auth/convert-token`, {
      token: accessToken,
      backend: 'facebook',
      grant_type: 'convert_token',
      client_id: '7jAVcZzgJb0xo3v8j019vMlHh3ZK61rQhlHsWLfo',
      client_secret:
        'InjSE9sOlfPXiMuRVEK5hh0Hm11aUTdexjgMx8C0cUbq7qz2n3TkurqcLl0Tay5zf596prwm5XPs0RcDCXb4BrE9NMNHLKr2RduA4bNsokNUTkXVvP9ewD2Rmnmaj9T4',
    })
    .then(res => {
      // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
}

export function googleLogin(accessToken) {
  axios
    .post(`http://10.0.2.2:8000/api-auth/convert-token`, {
      token: accessToken,
      backend: 'google-oauth2',
      grant_type: 'convert_token',
      client_id: '7jAVcZzgJb0xo3v8j019vMlHh3ZK61rQhlHsWLfo',
      client_secret:
        'InjSE9sOlfPXiMuRVEK5hh0Hm11aUTdexjgMx8C0cUbq7qz2n3TkurqcLl0Tay5zf596prwm5XPs0RcDCXb4BrE9NMNHLKr2RduA4bNsokNUTkXVvP9ewD2Rmnmaj9T4',
    })
    .then(res => {
      // Save somewhere these access and refresh tokens
      console.log(res.data);
    });
}

axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error;
    console.log(originalRequest);

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
        .post('http://10.0.2.2:8000/api-auth/token', {
          client_id: 'Your client id ',
          client_secret: 'Your client secret',
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
