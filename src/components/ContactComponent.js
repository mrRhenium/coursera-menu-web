import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Control, Errors, Form, actions } from "react-redux-form";

const required = (val) => val && val.length;
const minlength = (len) => (val) => val && val.length >= len;
const maxlength = (len) => (val) => !val || val.length <= len;
const isnumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is " + JSON.stringify(values));
    alert("Current State is " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    // event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </div>
            <div className="breadcrumb-item active">Contact Us</div>
          </div>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                href="https://skype.com"
                role="button"
                className="btn btn-info"
              >
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        {/* form code start here */}

        <div className="row row-content my-1">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form
              model="feedback"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="firstname">First Name</label>
                </div>
                <div className="col-10">
                  <Control.text
                    model=".firstname"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: " Required",
                      minlength: " Must be greater than 2 characters",
                      maxlength: " Must be 15 characters or less",
                    }}
                  />
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="col-10">
                  <Control.text
                    model=".lastname"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    validators={{
                      required,
                      minlength: minlength(3),
                      maxlength: maxlength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: " Required",
                      minlength: " Must be greater than 2 characters",
                      maxlength: " Must be 15 characters or less",
                    }}
                  />
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="telnum">Contact Tel.</label>
                </div>
                <div className="col-10">
                  <Control.text
                    model=".telnum"
                    className="form-control"
                    name="telnum"
                    id="telnum"
                    placeholder="Tel. number"
                    validators={{
                      required,
                      isnumber,
                      minlength: minlength(5),
                      maxlength: maxlength(10),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: " Required",
                      minlength: " Must be greater than 4 number",
                      maxlength: " Must be 10 number or less",
                      isnumber: " Must be a number",
                    }}
                  />
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col-10">
                  <Control.text
                    model=".email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: " Required",
                      validEmail: " Invalid Email address",
                    }}
                  />
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-6 offset-2">
                  <div className="form-check">
                    <div className="form-check-label">
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        id="agree"
                        className="form-check-input"
                      />
                      <strong>
                        <label htmlFor="agree">May we contact you ? </label>
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-3 offset-1">
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-2">
                  <label htmlFor="message">Your Feedback</label>
                </div>
                <div className="col-10">
                  <Control.textarea
                    model=".message"
                    className="form-control"
                    name="message"
                    id="message"
                    cols="50"
                    rows="5"
                  />
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-10 offset-2">
                  <button className="btn btn-primary">Send Feedback</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
