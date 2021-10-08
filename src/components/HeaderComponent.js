import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="row border border-danger">
          <div className="navbar bg-info">
            <div className="navbar-brand text-light">Ristorante con fusion</div>
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
