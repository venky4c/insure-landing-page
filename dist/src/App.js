import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="wrapper">
      <Header icon="Logo" />
      <Content leftbg="intro-left" rightbg="intro-right" />
    </div>
  );
}

export default App;
{
  /* <Header icon="Logo" /> */
}
