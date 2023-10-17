import React from 'react'

const WaveDivider = ({ invert = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ transform: invert ? 'scaleY(-1)' : 'none' }}
    >
      <path
        fill="#34495E"
        fill-opacity="0.6"
        d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,149.3C672,117,768,75,864,90.7C960,107,1056,181,1152,213.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

export default WaveDivider