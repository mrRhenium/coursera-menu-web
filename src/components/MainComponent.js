import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetailed from "./DishdetailedComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };
  render() {
    return (
      <div className="container-fluid bg-dark border    border-danger w-100 h-auto">
        {/* Navbar design from Bootstrap */}
        <div className="row border border-danger">
          <div className="navbar bg-info">
            <div className="navbar-brand text-light">mr. Rhenium</div>
          </div>
        </div>
        {/* Navbar ended */}

        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => {
            this.onDishSelect(dishId);
          }}
        />
        <Dishdetailed
          selectedDish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
