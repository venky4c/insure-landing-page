import React from "react";

function Content() {
  return (
    <div className="content">
      <section className="content1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <header className="heading">Humanizing your insurance.</header>
              <p className="para">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <button className="viewPlans">View Plans</button>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <img
                src={require("../assets/images/image-intro-mobile.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="content2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading2">We're different</h1>
            </div>
            <div class="w-100"></div>
            <div className="col-sm" id="snappy">
              <img
                className="snappy-image"
                src={require("../assets/images/icon-snappy-process.svg")}
                alt=""
              />
              <h3 className="snappy-title">Snappy Process</h3>
              <p className="snappy-para">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div className="col-sm" id="affordable">
              <img
                className="affordable-image"
                src={require("../assets/images/icon-affordable-prices.svg")}
                alt=""
              />

              <h3 className="affordable-title">Affordable Prices</h3>
              <p className="affordable-para">
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className="col-sm" id="people">
              <img
                className="people-image"
                src={require("../assets/images/icon-people-first.svg")}
                alt=""
              />
              <h3 className="people-title">People First</h3>
              <p className="people-para">
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* // end of container */}
      </section>
      <section className="content3">
        <div className="row">
          <div className="col-sm">
            <h3>Find out more about how we work</h3>
          </div>
          <div className="col-sm">
            <button>How we work</button>
          </div>
        </div>

        <div className="work-logo"></div>
        <div className="work-socials"></div>
      </section>
    </div>
  );
}

export default Content;

{
  /* <hr className="ruler" size="1" width="30%" /> */
}
