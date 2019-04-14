import React, { Component } from "react";
import {
  ValidationForm,
  TextInput,
  SelectGroup
} from "react-bootstrap4-form-validation";
import { connect } from "react-redux";
import validator from "validator";
import { createContact, fetchContacts } from "../redux/actions/contacts";

class AddContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    company: "",
    emails: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    const contact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company,
      emails: [this.state.email]
    };
    this.props.createContact(contact);
    this.props.close();
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="col">
        <ValidationForm
          onSubmit={this.handleSubmit}
          onErrorSubmit={this.handleErrorSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <TextInput
              name="firstName"
              id="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <TextInput
              name="lastName"
              id="lastName"
              minLength="4"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Rol</label>
            <SelectGroup
              name="company"
              id="company"
              value={this.state.company}
              required
              errorMessage="Please select a company."
              onChange={this.handleChange}>
              <option value="">--- Please select ---</option>
              <option value="professors">Profesor</option>
              <option value="students">Estudiante</option>
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
            <button className="btn btn-primary">Agregar Contacto</button>
          </div>
        </ValidationForm>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createContact,
  fetchContacts
};

export default connect(
  null,
  mapDispatchToProps
)(AddContact);
