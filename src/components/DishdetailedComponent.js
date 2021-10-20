import React from "react";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  // print the selected dish
  if (dish != null) {
    return (
      <div className="card my-2">
        <img src={dish.image} alt={dish.name} className="card-img" />
        <div className="card-body">
          <h1 className="card-title">{dish.name}</h1>
          <div className="card-text">{dish.description}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComment({ comments }) {
  if (comments != null) {
    const comment = comments.map((e) => {
      return (
        <div key={e.id}>
          <div className=" card-text text-danger">
            {e.id + 1 + ". " + e.comment}
          </div>
          <div className="card-link  mb-2">
            -- {e.author}{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(e.date)))}
          </div>
        </div>
      );
    });
    return (
      <div className="card my-2 d-flex align-items-center">
        <h1 className="card-title ">Comments</h1>
        <div className="card-body">{comment}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link to="/menu">Menu</Link>
            </div>
            <div className="breadcrumb-item active">{props.dish.name}</div>
          </div>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment comments={props.comments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dishdetail;
