import React from "react";
import Icon from "../services/Icon";

function Header(props) {
  return (
    <div className="header">
      <span className="title">
        <Icon name={props.icon} />
      </span>
      <ul className="nav">
        <li>
          <button>How we work</button>
        </li>
        <li>
          <button>Blog</button>
        </li>
        <li>
          <button>Account</button>
        </li>
        <li>
          <button>View plans</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
