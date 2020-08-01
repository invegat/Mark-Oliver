/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment, global-require */
import React, { Component } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  // NavbarToggler,
  // Collapse,
  // Button,
  NavItem,
  NavLink,
} from 'mdbreact';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/navBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      // isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { collapse } = this.state;
    this.setState({
      collapse: !collapse,
    });
  }

  render() {
    return (
      <Navbar className="navbar-navbar" color="blue-grey darken-2" dark expand="md" scrolling>
        <NavbarBrand href="/">
          <img src={require('./graphics/Logo48x48.png')} alt="logo" />

          <strong>Mark Oliver</strong>
        </NavbarBrand>
        {/* {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />} */}

        <NavbarNav left className="nav">
          <NavItem>
            <NavLink exact className="nav-link" to="/" activeClassName="success-color">
              Home
            </NavLink>
          </NavItem>
        </NavbarNav>

        <NavbarNav right>
          <NavItem>
            <NavLink className="nav-link" to="/gsUpload" activeClassName="success-color">
              Upload Gale/Shapley Input File
              </NavLink>
          </NavItem>
        </NavbarNav>
      </Navbar>
    );
  }
}
