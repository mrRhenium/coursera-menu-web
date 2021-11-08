import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const minlength = (len) => (val) => val && val.length >= len;
const maxlength = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
  }
  submitComment(values) {
    console.log("Current State is " + JSON.stringify(values));
    alert("Current State is " + JSON.stringify(values));
  }
  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="modal" id="commentForm">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Submit Comment</h4>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <LocalForm onSubmit={(values) => this.submitComment(values)}>
                    <div className="form-group my-4">
                      <label htmlFor="rating">Rating</label>
                      <Control.select
                        className="form-control"
                        model=".rating"
                        id="rating"
                        name="rating"
                        validators={{
                          required,
                        }}
                      >
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </Control.select>
                      <Errors
                        className="text-danger"
                        model=".rating"
                        show="touched"
                        messages={{
                          required: "Required",
                        }}
                      />
                    </div>
                    <div className="form-group my-4">
                      <label htmlFor="author">Author</label>
                      <Control.text
                        className="form-control"
                        model=".author"
                        id="author"
                        name="author"
                        placeholder="author"
                        validators={{
                          required,
                          minlength: minlength(3),
                          maxlength: maxlength(15),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                          required: "Required ",
                          minlength: " Must be greater than 2 characters",
                          maxlength: "Must be 15 charcters or less",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <Control.textarea
                        className="form-control"
                        model=".message"
                        id="message"
                        name="message"
                        cols="6"
                        rows="6"
                      />
                    </div>
                    <div className="form-group my-4">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </LocalForm>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn border border-dark bg-light"
            data-bs-toggle="modal"
            data-bs-target="#commentForm"
          >
            <i className="fa fa-pencil px-2"></i>
            <span className="text-dark lead">Submit Comment</span>
          </button>
        </div>
      </>
    );
  }
}

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
      <>
        <div className="row">
          <div className="card my-2 d-flex align-items-center">
            <h1 className="card-title ">Comments</h1>
            <div className="card-body">{comment}</div>
          </div>
        </div>
        <div className="row mt-2">
          <CommentForm />
        </div>
      </>
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
