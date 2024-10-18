import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Explore = ({ width = 38, height = 38, strokeColor = 'black' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M26.7342 35.2572L29.6686 31.0861L30.6467 27.3984C26.2957 25.7456 22.8779 23.0698 22.8779 23.0698L19.4937 26.1504L19.3363 27.4996C19.2464 28.3091 19.5387 29.1073 20.1346 29.6694C20.8766 30.3665 21.8435 31.3334 22.1133 31.9068C22.6867 33.0986 22.979 35.0548 23.1252 36.5389"
      stroke={strokeColor}
      strokeWidth="1.31168"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25.9629 2.39404L26.3114 3.10235L22.2078 5.73321L24.4788 7.41966L27.5257 7.16107C27.5257 7.16107 28.5713 8.57769 28.6163 8.94871C28.7399 9.9943 28.0316 11.9731 28.0316 11.9731L23.0285 12.1642L21.4657 15.2335L18.4414 12.9737C18.4414 12.9737 15.5069 13.4234 15.8892 15.4809L18.1603 17.1336L19.7568 20.4165L17.5532 22.3166L11.763 19.1573L10.4026 11.4559C10.4026 11.4559 13.1572 8.58893 11.7968 6.79006C11.066 5.82315 10.6163 5.50835 9.60439 5.98055L6.625 5.93558"
      stroke={strokeColor}
      strokeWidth="1.31168"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05885 28.9411 1 19 1C9.05885 1 1 9.05885 1 19C1 28.9411 9.05885 37 19 37Z"
      stroke={strokeColor}
      strokeWidth="1.31168"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Explore;

