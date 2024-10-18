import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Logout = ({ width = 19, height = 20, stroke = 'black', ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.57031 9.84891H18.4074M15.0751 13.3951L18.4074 9.85175L15.0697 6.30273"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.7632 14.2137V17.4871C12.7632 18.0893 12.303 18.5782 11.7363 18.5782H1.98009C1.41331 18.5782 0.953125 18.0893 0.953125 17.4871V2.21125C0.953125 1.60905 1.41331 1.12012 1.98009 1.12012H11.7363C12.303 1.12012 12.7632 1.60905 12.7632 2.21125V5.48464"
      stroke={stroke}
      strokeWidth={0.907821}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Logout;
