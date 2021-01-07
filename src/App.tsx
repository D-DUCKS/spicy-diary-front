import React from "react";
import Header from "./components/common/Header";
import Navigation from "./components/common/Navigation";
// import logo from "./logo.svg";
import "./App.css";

interface Props {
  router: any;
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.router}
      <Navigation />
    </>
  );
};

export default App;
