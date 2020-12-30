import React from "react";
import Header from "./components/Common/Header";
import Navigation from "./components/Common/Navigation";
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
