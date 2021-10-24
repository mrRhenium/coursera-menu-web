import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    alert(
      "Username " +
        this.username.value +
        " Password " +
        this.password.value +
        " Remember me " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="row mx-auto">
          <div className="navbar bg-info navbar-expand-md">
            <div className="container-fluid">
              <a href="home" className="navbar-brand text-dark mr-auto">
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
                data-bs-toggle="collapse"
                data-bs-target="#navbar-id"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar-id">
                <ul className="navbar-nav">
                  <li className="nav-item ">
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
                <ul className="nav">
                  <li className="nav-item ml-auto">
                    <button
                      className=" btn btn-outline-primary text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-login"
                    >
                      <i className="fa fa-sign-in"> Login</i>
                    </button>
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
        <div className="modal" id="modal-login">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title">Login</h1>
              </div>
              <div className="modal-body">
                <form action="" onSubmit={this.handleLogin}>
                  <div className="form-group m-2">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      autoComplete="off"
                      required
                      ref={(input) => (this.username = input)}
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      autoComplete="off"
                      required
                      ref={(input) => (this.password = input)}
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="remember">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="remember"
                        id="remember"
                        ref={(input) => (this.remember = input)}
                      />{" "}
                      <strong>Remember me</strong>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
