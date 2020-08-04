import React from "react";
import { Route } from "react-router-dom";

import Home from './components/Home';
import UploadGS from "./components/UploadGSFile"
import withTracker from './components/HOC/withTracker';


class Routes extends React.Component {
  render() {
    const HomeWrapped = withTracker(Home)
    const UploadGSWrapped = withTracker(UploadGS)
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => <HomeWrapped {...props} />}
        />
        <Route
          exact
          path="/gsUpload"
          render={props => <UploadGSWrapped {...props} />}
        />
      </div>
    );
  }
}

export default Routes;
