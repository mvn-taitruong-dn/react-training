import React, { useState } from "react";
import UserRow from "./UserRow";

let id = 0;
const INIT_FORM = {
  email: "",
  password: "",
  country: "",
  gender: "",
  status: false,
  info: "",
};
function FormRegister() {
  const [form, setForm] = useState(INIT_FORM);

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newUsers = null;
    if (form.id) {
      newUsers = users.map((user) => (user.id === form.id ? form : user));
    } else {
      id += 1;
      const user = { ...form, id };
      newUsers = [...users, user];
    }
    setUsersLocal(newUsers);
    clearFormState();
  }

  function handleRemoveUser(id) {
    setUsersLocal(users.filter((user) => user.id !== id));
    clearFormState();
  }

  function handleUpdateUser(id) {
    setForm(users.find((user) => user.id === id));
  }

  function clearFormState() {
    setForm(INIT_FORM);
  }

  function handleChangeStatus(id, status) {
    setUsersLocal(
      users.map((user) => {
        if (user.id === id) {
          user.status = status;
        }
        return user;
      })
    );
  }
  function setUsersLocal(newUsers) {
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  }

  return (
    <>
      <form className="form-register" onSubmit={handleSubmit}>
        <h2>{form.id ? "Update" : "Register"}</h2>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Your country </label>
          <select onChange={handleChange} name="country" value={form.country}>
            <option value="">Please Choose</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <input
              key="raido0"
              type="radio"
              value="0"
              checked={form.gender === "0"}
              name="gender"
              onChange={handleChange}
            />
            <label>Male</label>
            <input
              key="radio1"
              type="radio"
              value="1"
              checked={form.gender === "1"}
              name="gender"
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            type="checkbox"
            name="status"
            onChange={handleChange}
            checked={form.status}
          />
        </div>
        <div className="form-group">
          <label>Other Information</label>
          <textarea
            name="info"
            value={form.info}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttons-set">
          <button className="btn btn-outline-primary">
            {form.id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Id</th>
              <th rowSpan="2">Email Address</th>
              <th rowSpan="2">Country</th>
              <th rowSpan="2">Gender</th>
              <th rowSpan="2">Status</th>
              <th rowSpan="2">Other Information</th>
              <th colSpan="2">Action</th>
            </tr>
            <tr>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                remove={handleRemoveUser}
                update={handleUpdateUser}
                handleChangeStatus={handleChangeStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default FormRegister;
