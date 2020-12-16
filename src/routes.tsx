import React from 'react';
import { Route, Switch } from 'react-router';
// import ScrollToTop from 'views/components/ScrollToTop';

// import ErrorPage from 'views/pages/ErrorPage';

export default function createRoutes() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Switch>
        {/* <Route exact path="/:encodedProfileId" component={ProfilePage} /> */}
        {/* <Route path="*" component={ErrorPage} /> */} //TODO
      </Switch>
    </>
  );
}
