import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    // console.log("Hello " + typeof DISHES);
    return (
      <div className="container-fluid bg-dark border    border-danger w-100 h-auto">
        {/* Navbar design from Bootstrap */}
        <div className="row border border-danger">
          <div className="navbar bg-info">
            <div className="navbar-brand text-light">mr. Rhenium</div>
          </div>
        </div>
        {/* Navbar ended */}

        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
