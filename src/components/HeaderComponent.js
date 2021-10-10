import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <div className="row border border-danger mx-auto">
          <div className="navbar bg-info navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand text-dark mr-auto" href="#">
                <img
                  src="assets/images/logo.png"
                  width="50"
                  height="50"
                  alt="Ristorante con fusion"
                />
              </a>
              <button
                className="navbar-toggler border border-dark"
                type="button"
                onClick={this.toggleNav}
                data-bs-toggle="collapse"
                data-bs-target="#navbar-id"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbar-id"
                // isOpen={this.state.isNavOpen}
              >
                <ul className="navbar-nav text-white">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      <i className="fa fa-home mx-1"></i>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/aboutus">
                      <i className="fa fa-info mx-1"></i>
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">
                      <i className="fa fa-bars mx-1"></i>
                      Menu
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contactus">
                      <i className="fa fa-phone mx-1"></i>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron">
          <div className="container">
            <div className="row row-header">
              <div className="col col-sm-6">
                <h1>Ristorante con fusion </h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
