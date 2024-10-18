import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const Report = ({ width = 17, height = 17, stroke = 'black', ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x="0.453911"
      y="0.453911"
      width="15.852"
      height="15.852"
      rx="3.03771"
      stroke={stroke}
      strokeWidth={0.907821}
    />
    <Path
      d="M8.57591 9.47449H8.18613C7.65401 9.47449 7.21551 9.05879 7.18956 8.52967L6.98581 4.37632C6.95287 3.70492 7.49091 3.14258 8.16617 3.14258H8.59588C9.27114 3.14258 9.80917 3.70492 9.77624 4.37632L9.57248 8.52967C9.54654 9.05879 9.10804 9.47449 8.57591 9.47449ZM7.23843 12.4801C7.23843 11.8519 7.75001 11.3427 8.38102 11.3427C9.01203 11.3427 9.52362 11.8519 9.52362 12.4801C9.52362 13.1082 9.01203 13.6174 8.38102 13.6174C7.75001 13.6174 7.23843 13.1082 7.23843 12.4801Z"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Report;
