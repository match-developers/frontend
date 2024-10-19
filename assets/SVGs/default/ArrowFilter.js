import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowFilter = ({ width = 8, height = 13, fillColor = '#737373' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3.64645 12.8536C3.84171 13.0488 4.15829 13.0488 4.35355 12.8536L7.53553 9.67157C7.7308 9.47631 7.7308 9.15973 7.53553 8.96447C7.34027 8.7692 7.02369 8.7692 6.82843 8.96447L4 11.7929L1.17157 8.96447C0.976311 8.7692 0.659728 8.7692 0.464466 8.96447C0.269204 9.15973 0.269204 9.47631 0.464466 9.67157L3.64645 12.8536ZM3.5 0.5L3.5 12.5H4.5L4.5 0.5L3.5 0.5Z"
      fill={fillColor}
    />
  </Svg>
);

export default ArrowFilter;