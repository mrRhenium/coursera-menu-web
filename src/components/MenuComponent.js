import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderMenuItem({ dish }) {
  return (
    <div className="card">
      <Link to={`menu/${dish.id}`}>
        <img className="card-img" src={dish.image} alt={dish.name} />
        <div className="card-body card-img-overlay">
          <h1 className="card-title">{dish.name}</h1>
        </div>
      </Link>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </div>
            <div className="breadcrumb-item active">Menu</div>
          </div>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>

        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Menu;
