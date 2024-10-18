import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Submit = ({ onSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onSubmit} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

Submit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB433', // 배경 색상
    borderColor: '#CC9029', // 경계선 색상
    borderWidth: 1,
    borderRadius: 5, // 모서리 곡선
  },
  buttonText: {
    fontSize: 20,
    color: '#000', // 텍스트 색상
    fontFamily: 'Exo 2', // 폰트 설정
  },
});

export default Submit;