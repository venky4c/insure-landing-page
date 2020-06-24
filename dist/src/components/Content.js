import React from "react";

function Content(props) {
  return (
    <div className="content">
      <div className="content1">
        <div className="firstCol">
          <header className="heading">Humanizing your insurance.</header>
          <p className="para">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="viewPlans">View Plans</button>
        </div>
        <div className="secondCol"></div>
        <div className="thirdCol"></div>
      </div>
      <div className="content2">
        <h1>We're different</h1>
        <div className="snappy">Snappy Process</div>
        <div className="affordable">Affordable Prices</div>
        <div className="people">People First</div>
      </div>
      <div className="content3"> </div>
    </div>
  );
}

export default Content;
