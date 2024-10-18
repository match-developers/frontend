import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Share = ({ width = 16, height = 20, stroke = 'black', ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.178 7.26389H12.9238C13.3868 7.26389 13.8309 7.44075 14.1583 7.75556C14.4857 8.07037 14.6696 8.49735 14.6696 8.94256V17.0001C14.6696 17.4454 14.4857 17.8723 14.1583 18.1871C13.8309 18.5019 13.3868 18.6788 12.9238 18.6788H2.44894C1.98592 18.6788 1.54186 18.5019 1.21446 18.1871C0.887058 17.8723 0.703125 17.4454 0.703125 17.0001V8.94256C0.703125 8.49735 0.887058 8.07037 1.21446 7.75556C1.54186 7.44075 1.98592 7.26389 2.44894 7.26389H4.19475M11.178 4.57803L7.68637 1.2207M7.68637 1.2207L4.19475 4.57803M7.68637 1.2207V12.6776"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Share;
