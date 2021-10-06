import React, { Component } from "react";

function RenderMenuItem({ dish, onClick }) {
  return (
    <div
      className="card"
      onClick={() => {
        onClick(dish.id);
      }}
    >
      <img className="card-img" src={dish.image} alt={dish.name} />
      <div className="card-body card-img-overlay">
        <h1 className="card-title">{dish.name}</h1>
      </div>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1 border" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="contanier">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
