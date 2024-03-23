import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = Config.BACKEND_URL;

export const getPosts = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    const response = await axios.get(`${BASE_URL}/newsfeed/custom_posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async post => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    const response = await axios.post(
      `${BASE_URL}/newsfeed/custom_posts`,
      post,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
