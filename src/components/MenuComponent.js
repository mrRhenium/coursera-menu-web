import React, { Component } from "react";
import Dishdetailed from "./DishdetailedComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      id: null,
    };
  }

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
    this.setState({ id: dish.id });
  };

  render() {
    const menu = this.props.dishes.map((dish) => {
      // console.log(typeof dish);
      return (
        <div className="col-12 col-md-5 m-1 border" key={dish.id}>
          <div
            className="card"
            onClick={() => {
              this.onDishSelect(dish);
              console.log("clicked " + dish.name);
            }}
          >
            <img className="card-img" src={dish.image} alt={dish.name} />
            <div className="card-body card-img-overlay">
              <h1 className="card-title">{dish.name}</h1>
            </div>
          </div>
        </div>
      );
    });
    // console.log(typeof menu);
    return (
      <div className="contanier">
        <div className="row">{menu}</div>
        <Dishdetailed
          selectedDish={this.state.selectedDish}
          dish={this.props.dishes}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default Menu;
