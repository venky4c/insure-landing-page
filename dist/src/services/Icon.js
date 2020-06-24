import React from "react";
import { Logo } from "../components/svg/Logo";

const Icon = (props) => {
  switch (props.name) {
    case "Logo":
      return <Logo {...props} />;
    default:
      return null;
  }
};

export default Icon;
