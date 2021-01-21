import React from 'react';
import 'src/css/common.css';
import Header from './components/Common/Header';
import Navigation from './components/Common/Navigation';
// import logo from "./logo.svg";
// import './App.css';

interface Props {
  router: any;
}

const App: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <div className="content_wrap">{props.router}</div>
      <Navigation />
    </>
  );
};

export default App;
