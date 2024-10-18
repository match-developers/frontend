import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Search = ({ width = 26, height = 26, strokeColor = 'black' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15.3441 3.50304C18.6639 6.84339 18.6639 12.2574 15.3441 15.5978C12.0244 18.9381 6.64361 18.9381 3.32382 15.5978C0.0040378 12.2574 0.0040378 6.8375 3.32382 3.50304C6.64361 0.1686 12.0244 0.162709 15.3441 3.50304Z"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeMiterlimit="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.834 16.0909L24.834 25.1455"
      stroke={strokeColor}
      strokeWidth="1.3"
      strokeMiterlimit="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Search;
