import React, { Component } from 'react';

class SplashInfo extends Component {
  render() {
    return (
      <div className="splash-info">
        <div className="splash-info-block">
          <h1>STEP-BY-STEP</h1>
          <br/>
          <p>We make it easz to learn how to cook anything, one step at a time. From main dishes to desserts, you are sure to be inspired by the
          awesome recipes that are shared everyday.</p>
        </div>
         <div className="splash-info-block">
          <h1>MADE BY YOU</h1>
          <br/>
          <p>iCook is created by you. No matter who you are, we all have a secret recipe to share. Come join our community of curious cooks, 
          lovers of fine dining, and life long learners who love to share what they make.</p>
        </div>
         <div className="splash-info-block">
          <h1>A HAPPY PLACE</h1>
          <br/>
          <p>Cooking things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest
          online communities anywhere.</p>
        </div>
        <br/>
      </div>
    );
  }
}

export default SplashInfo;
