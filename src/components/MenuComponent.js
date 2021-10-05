import React, { Component } from "react";

class Menu extends Component {
  // rendering the MenuComponent
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1 border" key={dish.id}>
          <div
            className="card"
            onClick={() => {
              this.props.onClick(dish.id);
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
    return (
      <div className="contanier">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
