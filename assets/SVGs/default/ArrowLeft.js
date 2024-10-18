import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeft = ({ width = 40, height = 34, strokeColor = '#121331' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 40 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.06726 17H32"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.9412 27L8 17L16.9412 7"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeft;
