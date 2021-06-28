import React, { Component } from "react";
import UserRow from "./UserRow";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        email: "",
        password: "",
        country: "",
        gender: null,
        status: false,
        info: "",
      },
      users: [],
    };
    this.id = 0;
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState((preState) => ({
      form: {
        ...preState.form,
        [name]: value,
      },
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.state;
    const { id } = this;
    this.id = id + 1;
    const user = { ...form, id: this.id };
    this.clearFormState();
    this.setState((preState) => ({
      users: [user, ...preState.users],
    }));
  };

  clearFormState = () => {
    this.setState({
      form: {
        email: "",
        password: "",
        country: "",
        gender: null,
        status: false,
        info: "",
      },
    });
  };
  handleRemoveUser = (id) => {
    this.setState((prev) => ({
      users: prev.users.filter((user) => user.id !== id),
    }));
  };
  render() {
    const { form, users } = this.state;

    return (
      <>
        <form className="form-register" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your country </label>
            <select
              onChange={this.handleChange}
              name="country"
              value={form.country}
            >
              <option value="">Please Choose</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <input
                type="radio"
                value="0"
                defaultChecked={form.gender === "0"}
                name="gender"
                onChange={this.handleChange}
              />
              <label>Male</label>

              <input
                type="radio"
                value="1"
                defaultChecked={form.gender === "1"}
                name="gender"
                onChange={this.handleChange}
              />
              <label>Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="checkbox"
              name="status"
              onChange={this.handleChange}
              defaultChecked={form.status}
            />
          </div>
          <div className="form-group">
            <label>Other Information</label>
            <textarea
              name="info"
              value={form.info}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="buttons-set">
            <button
              className="btn btn-outline-primary"
              onSubmit={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        <div className="user-list">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Email Address</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Other Information</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow
                  key={index}
                  user={user}
                  remove={this.handleRemoveUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default FormRegister;
