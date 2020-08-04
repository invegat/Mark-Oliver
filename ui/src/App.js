import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import UploadGS from "./components/UploadGSFile"
import withTracker from './components/HOC/withTracker';
// import { Router } from 'express';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
    };
  }


  componentDidMount() {
    fetch('/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false,
        });
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false,
        });
      });
  }

  render() {
    const HomeWrapped = withTracker(Home)
    const UploadGSWrapped = withTracker(UploadGS)
    return (
      <Router>
        <div className='App'>
          {/* <NavBar /> */}
          <div className="App--Body">
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
        </div>
      </Router>
    )


  }

}



export default App;
