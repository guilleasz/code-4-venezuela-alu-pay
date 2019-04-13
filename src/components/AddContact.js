import React, { Component } from "react";
import {
  ValidationForm,
  TextInput,
  SelectGroup
} from "react-bootstrap4-form-validation";
import validator from "validator";

export default class AddContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    company: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    // TODO: send request
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };

  render() {
    return (
      <div className="col-8">
        <ValidationForm
          onSubmit={this.handleSubmit}
          onErrorSubmit={this.handleErrorSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <TextInput
              name="firstName"
              id="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <TextInput
              name="lastName"
              id="lastName"
              minLength="4"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <SelectGroup
              name="company"
              id="company"
              value={this.state.company}
              required
              errorMessage="Please select a company."
              onChange={this.handleChange}>
              <option value="">--- Please select ---</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </SelectGroup>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <TextInput
              name="email"
              id="email"
              type="email"
              validator={validator.isEmail}
              errorMessage={{ validator: "Please enter a valid email" }}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Add Contact</button>
          </div>
        </ValidationForm>
      </div>
    );
  }
}
