import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Matchmaking = ({ width = 36, height = 36, strokeColor = 'black' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M33.4629 11.0536C35.084 14.6907 35.382 18.7803 34.3053 22.6139C33.2285 26.4476 30.8449 29.784 27.5672 32.0453C24.2895 34.3065 20.3242 35.3503 16.358 34.9957C12.3918 34.6411 8.67449 32.9105 5.84991 30.1037C3.02533 27.2968 1.27136 23.5905 0.891768 19.6266C0.512175 15.6627 1.53087 11.6909 3.77142 8.39903C6.01197 5.10715 9.33327 2.70255 13.1601 1.60167C16.9869 0.500791 21.0783 0.772975 24.7255 2.37108"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </Svg>
);

export default Matchmaking;