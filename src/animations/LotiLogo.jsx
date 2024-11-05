import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animate = () => {
  return (
    <DotLottieReact
      src="/assets/cart.lottie"
      loop
      autoplay
      style={{ width: '130px', height: '130px' }}
    />
  );
};

export default Animate;