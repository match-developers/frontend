import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileSelected = ({
  width = 38,
  height = 38,
  fillColor = '#FFB433',
  strokeColor = '#121331'
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M36.4857 17.9714C36.4857 27.9126 31.8571 37.5143 20.5429 23.1143C10.6017 23.1143 1.51429 41.1143 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 36.4857 8.0303 36.4857 17.9714Z"
      fill={fillColor}
    />
    <Path
      d="M37 19C37 28.9395 28.9395 37 19 37C9.06045 37 1 28.9395 1 19C1 9.06045 9.06045 1 19 1C28.9395 1 37 9.06045 37 19Z"
      stroke={strokeColor}
      strokeWidth="1.25373"
      strokeMiterlimit="13.4906"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.95312 31.4058L5.97448 30.9253C5.97448 26.356 9.67905 22.6514 14.2485 22.6514H23.7183C28.2876 22.6514 31.9923 26.356 31.9923 30.9253L31.9709 31.4805"
      fill="#E6E6E6"
    />
    <Path
      d="M5.95312 31.4058L5.97448 30.9253C5.97448 26.356 9.67905 22.6514 14.2485 22.6514H23.7183C28.2876 22.6514 31.9923 26.356 31.9923 30.9253L31.9709 31.4805"
      stroke={strokeColor}
      strokeWidth="1.25373"
      strokeMiterlimit="22.1245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.5722 9.50881C24.4477 10.5551 24.9708 11.8897 24.9708 13.3629C24.9708 16.6725 22.2911 19.3522 18.9815 19.3522C15.6719 19.3522 12.9922 16.6725 12.9922 13.3629C12.9922 10.0533 15.6719 7.37364 18.9815 7.37364C20.8285 7.36289 22.4727 8.19562 23.5722 9.50881Z"
      fill="#E6E6E6"
      stroke="black"
      strokeWidth="1.25373"
      strokeMiterlimit="22.1245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileSelected;
