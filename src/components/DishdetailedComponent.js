import React from "react";

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

function RenderComment({ dish }) {
  if (dish != null) {
    const comment = dish.comments.map((e) => {
      return (
        <div key={e.id}>
          <div className=" card-text text-danger">
            {e.id + 1 + ". " + e.comment}
          </div>
          <div className="card-link  mb-2">
            {/* -- {e.author} , {e.date.slice(0, 9)} */}
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
    <div className="row mt-2">
      <div className="col-12 col-md-5 m-1 border">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1 border">
        {/* there is my custom changes in the code */}
        <RenderComment dish={props.dish} />
      </div>
    </div>
  );
};

export default Dishdetail;
