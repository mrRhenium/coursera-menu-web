import React, { Component } from "react";

class Dishdetailed extends Component {
  // define the renderDish function which return choose dishes by the User

  renderDish = (dish) => {
    // print the selected dish
    if (dish != null) {
      const comment = this.props.selectedDish.comments.map((e) => {
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
        <>
          {/* selected dish image and card */}
          <div className="col-12 col-md-5 m-1 border">
            <div className="card my-2">
              <img src={dish.image} alt={dish.name} className="card-img" />
              <div className="card-body">
                <h1 className="card-title">{dish.name}</h1>
                <div className="card-text">{dish.description}</div>
              </div>
            </div>
          </div>

          {/* selected dish's comment section */}
          <div className="col-12 col-md-5 col-mid-5 m-1 border">
            <div className="card my-2 d-flex align-items-center">
              <h1 className="card-title ">Comments</h1>
              <div className="card-body">{comment}</div>
            </div>
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  };

  // rendering the component

  render() {
    return (
      <div className="row mt-2">{this.renderDish(this.props.selectedDish)}</div>
    );
  }
}

export default Dishdetailed;
