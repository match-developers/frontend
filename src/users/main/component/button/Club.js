import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ClubButton = ({ clubId }) => {
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await axios.get(
          `https://your-backend-url/clubs/${clubId}/`
        );
        setClubData(response.data);
      } catch (err) {
        setError('Failed to load club data');
      } finally {
        setLoading(false);
      }
    };

    fetchClubData();
  }, [clubId]);

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ClubMainScreen', { clubId: clubData.club.id })
      }
    >
      <Image
        source={{ uri: clubData.club.profile_photo }}
        style={styles.clubImage} // Apply the clubImage style here
        defaultSource={{ uri: null }}
      />
    </TouchableOpacity>
  );
};

ClubButton.propTypes = {
  clubId: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  clubImage: {
    width: 36, // Use the same size as avatarStyles
    height: 36,
    borderRadius: 18, // Circular image
    backgroundColor: '#D9D9D9', // Default background color
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ClubButton;
