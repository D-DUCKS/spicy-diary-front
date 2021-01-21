import React from 'react';
import 'css/common.css';

import Header from 'components/common/Header';
import Navigation from 'components/common/Navigation';

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
