import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from "mdbreact"

import './App.css';

import Home from './components/Home';
// import GNavBar from './components/GNavBar';
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
      collapseID: ""
    };
  }


  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };



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
          {/*  <GNavBar /> */}
          <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <strong className="align-middle">MDB React</strong>
            </MDBNavbarBrand>
          </MDBNavbar>
          {/*
          <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <strong className="align-middle">MDB React</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/gsUpload"
                  >
                    <strong>GS File Upload</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          */}
          <main className="App--Body">
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
          </main>
        </div>
      </Router>
    )


  }

}



export default App;
