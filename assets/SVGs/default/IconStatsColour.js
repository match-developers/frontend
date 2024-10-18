import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconStatsColour = ({ width = 23, height = 28 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 23 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.21094 26.5882V17.7647C6.21094 16.7901 5.42085 16 4.44623 16C3.47161 16 2.68153 16.7901 2.68153 17.7647V26.5882"
      fill="#FFD34D"
      stroke="black"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <Path
      d="M13.2656 26.5883V8.94122C13.2656 7.9666 12.4755 7.17651 11.5009 7.17651C10.5263 7.17651 9.73621 7.9666 9.73621 8.94122V26.5883"
      fill="#FFB433"
      stroke="black"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <Path
      d="M20.3281 26.5882V2.7647C20.3281 1.79008 19.538 1 18.5634 1C17.5888 1 16.7987 1.79009 16.7987 2.76471V26.5882"
      fill="#FF834D"
      stroke="black"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <Path
      d="M22.0905 26.7231H0.914062"
      stroke="black"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconStatsColour;