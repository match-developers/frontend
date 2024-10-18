import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Swap = ({ width = 18, height = 18, stroke = 'black', ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.52344 12.0034H14.9033V0.536133"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5518 7.59288H3.17188V17.2959M17.4177 3.18241L14.9037 0.536133L12.3898 3.18241"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.68418 14.6494L3.17022 17.2957L0.65625 14.6494"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Swap;
