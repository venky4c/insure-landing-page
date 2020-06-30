import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <div class="container">
          <img
            className="title"
            src={require("../assets/images/logo.svg")}
            alt=""
          />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav nav nav-fill w-100">
              <li class="nav-item">
                <a class="nav-link" href="#howWeWork">
                  How We Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#account">
                  Account
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#viewPlans">
                  View Plans
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
