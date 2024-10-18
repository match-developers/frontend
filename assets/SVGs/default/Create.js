import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Create = ({ width = 26, height = 26, strokeColor = '#121330' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13 1L13 25M1 13L25 13"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Create;
