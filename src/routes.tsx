import React from 'react';
import { Route, Switch } from 'react-router';
// import ScrollToTop from 'views/components/ScrollToTop';

// import ErrorPage from 'views/pages/ErrorPage';
import SubwayPage from './container/Subway';

export default function createRoutes() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route exact path="/subway" component={SubwayPage} />
        {/* <Route exact path="/:encodedProfileId" component={ProfilePage} /> */}
        {/* <Route path="*" component={ErrorPage} /> */}
      </Switch>
    </>
  );
}
