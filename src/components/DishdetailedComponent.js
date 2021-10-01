import React, { Component } from "react";

class Dishdetailed extends Component {
  constructor(props) {
    super(props);
  }

  // define the renderDish function which return choose dishes by the User

  renderDish = (dish) => {
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
  };

  commentfunction(dish) {
    if (dish != null) {
      const comment = this.props.selectedDish.comments.map((e) => {
        return (
          <>
            <div key={e.id + 50}>
              <div className=" card-text lead">
                {e.id + 1 + ". " + e.comment}
              </div>
              <div className="card-link lead mb-1">
                -- {e.author} , {e.date.slice(0, 9)}
              </div>
            </div>
          </>
        );
      });
      return (
        <div className="card my-2 d-flex align-items-center">
          <h1 className="card-title ">Comments</h1>
          <div className="card-body">{comment}</div>
        </div>
      );
    } else {
      <div></div>;
    }
  }

  // rendering the component

  render() {
    // console.log(this.props.dish[0].comments[0]);
    return (
      <div className="row mt-2">
        <div className="col-12 col-md-5 m-1 border">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 col-mid-5 m-1 border">
          {this.commentfunction(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Dishdetailed;
