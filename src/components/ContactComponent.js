import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "tel",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is " + JSON.stringify(this.state));

    alert("Current State is " + JSON.stringify(this.state));

    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true,
      },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "First Name should be >= 3 characters";
    } else if (this.state.touched.firstname && firstname.length > 10) {
      errors.firstname = "First Name should be <=10 characters";
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname = "Last Name should be >= 3 characters";
    } else if (this.state.touched.lastname && lastname.length > 10) {
      errors.lastname = "Last Name should be <=10 characters";
    }

    let reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = "Tel. Number should only contain Number";
    }

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x == "@").length != 1
    ) {
      errors.email = "Email should contain a @ ";
    }

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    // custoum function is start

    let class_firstname;
    if (this.state.touched.firstname) {
      if (errors.firstname != "") class_firstname = "is-invalid";
      else class_firstname = "is-valid";
    }

    let class_lastname;
    if (this.state.touched.lastname) {
      if (errors.lastname != "") class_lastname = "is-invalid";
      else class_lastname = "is-valid";
    }

    let class_telnum;
    if (this.state.touched.telnum) {
      if (errors.telnum != "") class_telnum = "is-invalid";
      else class_telnum = "is-valid";
    }

    let class_email;
    if (this.state.touched.email) {
      if (errors.email != "") class_email = "is-invalid";
      else class_email = "is-valid";
    }

    // custom function is over

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
              <a role="button" className="btn btn-info">
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
            <form action="" onSubmit={this.handleSubmit}>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="firstname">First Name</label>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    className={`form-control ${class_firstname} `}
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onBlur={this.handleBlur("firstname")}
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">{errors.firstname}</div>
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    className={`form-control ${class_lastname} `}
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">{errors.lastname}</div>
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="telnum">Contact Tel.</label>
                </div>
                <div className="col-10">
                  <input
                    type="tel"
                    className={`form-control ${class_telnum} `}
                    name="telnum"
                    id="telnum"
                    placeholder="Tel. number"
                    value={this.state.telnum}
                    onBlur={this.handleBlur("telnum")}
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">{errors.telnum}</div>
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-2">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col-10">
                  <input
                    type="email"
                    className={`form-control ${class_email} `}
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
              </div>
              <div className="form-group row my-4">
                <div className="col-6 offset-2">
                  <div className="form-check">
                    <div className="form-check-label">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="form-check-input"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      <strong>
                        <label htmlFor="agree">May we contact you ? </label>
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-3 offset-1">
                  <select
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-2">
                  <label htmlFor="message">Your Feedback</label>
                </div>
                <div className="col-10">
                  <textarea
                    name="message"
                    id="message"
                    cols="50"
                    rows="5"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-group row my-2">
                <div className="col-10 offset-2">
                  <button className="btn btn-primary">Send Feedback</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
