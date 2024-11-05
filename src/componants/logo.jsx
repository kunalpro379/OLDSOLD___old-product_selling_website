import React from 'react';

const LoopifyLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6C3EFF' }} />
          <stop offset="100%" style={{ stopColor: '#7B52FF' }} />
        </linearGradient>
        <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF3E9D' }} />
          <stop offset="100%" style={{ stopColor: '#FF52B4' }} />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Loop Symbol */}
      <g transform="translate(90, 120)">
        {/* Infinity/Loop Symbol */}
        <path
          d="M0,0 C20,-20 40,-20 60,0 C80,20 100,20 120,0 C100,-20 80,-20 60,0 C40,20 20,20 0,0 Z"
          fill="none"
          stroke="url(#loopGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Animated Arrow */}
        <path
          d="M50,-5 L60,0 L50,5"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M0,0 C20,-20 40,-20 60,0 C80,20 100,20 120,0 C100,-20 80,-20 60,0 C40,20 20,20 0,0 Z"
          />
        </path>
      </g>

      {/* Company Name */}
      <g transform="translate(220, 120)">
        <text
          x="0"
          y="8"
          fontFamily="Arial, sans-serif"
          fontSize="48"
          fontWeight="bold"
          fill="url(#mainGradient)"
          textAnchor="start"
        >
          Loopify
        </text>
      </g>

      {/* Tagline */}
      <g transform="translate(220, 150)">
        <text
          x="0"
          y="0"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fill="#666"
          textAnchor="start"
        >
          Buy · Sell · Exchange
        </text>
      </g>

      {/* Small Decorative Icons */}
      <g transform="translate(90, 120)" opacity="0.6">
        {/* Shopping Bag Icon */}
        <path
          d="M-30,-40 L-20,-40 L-15,-25 L-35,-25 L-30,-40 Z M-35,-25 L-15,-25 L-15,-10 L-35,-10 Z"
          fill="#FF3E9D"
          transform="scale(0.7)"
        />

        {/* Price Tag Icon */}
        <path
          d="M140,-40 L150,-40 L155,-25 L135,-25 L140,-40 Z M135,-25 L155,-25 L155,-10 L135,-10 Z"
          fill="#6C3EFF"
          transform="scale(0.7)"
        />
      </g>
    </svg>
  );
};

export default LoopifyLogo;
