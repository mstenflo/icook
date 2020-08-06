import React, { Component } from 'react';
import SplashImage from './splash_image/splash_image';
import SplashInfo from './splash_info/splash_info';

class SplashContent extends Component {
  render() {
    return (
      <div>
        <SplashImage />
        <SplashInfo />
      </div>
    );
  }
}

export default SplashContent;
