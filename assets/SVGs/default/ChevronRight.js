import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRight = ({ width = 12, height = 22, strokeColor = '#121330' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1 1L11 11.0274L1.05463 21"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRight;
