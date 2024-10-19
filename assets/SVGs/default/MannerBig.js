import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MannerBig = ({ width = 254, height = 230 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 254 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M141.385 223.572C132.629 229.29 121.371 229.29 112.615 223.572C62.1345 190.513 5.31024 124.129 2.18312 75.614C-1.21204 22.3635 43.7292 7.17483 43.7292 7.17483C76.966 -7.03125 110.471 11.1061 127 41.0369C143.529 11.0167 177.034 -7.03125 210.271 7.17483C210.271 7.17483 255.212 22.3635 251.817 75.614C248.779 124.129 191.955 190.513 141.385 223.572Z"
      fill="#E6393C"
      stroke="#121331"
      strokeWidth="3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MannerBig;