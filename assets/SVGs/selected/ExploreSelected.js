import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExploreSelected = ({ width = 38, height = 38, fillColor = '#FFB433', strokeColor = 'black' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M23.1156 23.6284L30.3156 27.7427L28.2585 34.4284L23.6299 35.9713L23.1156 33.9141L19.5156 28.7713L20.0299 26.1998L23.1156 23.6284Z"
      fill={fillColor}
    />
    <Path
      d="M8.20312 4.6L16.946 1L25.6888 2.54286L22.0888 6.14286L27.2317 7.68571L28.7746 9.22857L27.746 11.2857L23.1174 12.3143L21.5746 14.8857L17.9746 12.8286L15.9174 15.4L19.5174 20.0286L17.9746 22.0857L12.3174 19.5143L10.7746 12.3143L12.3174 9.22857L11.8031 6.65714L8.20312 5.62857V4.6Z"
      fill={fillColor}
    />
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

export default ExploreSelected;
