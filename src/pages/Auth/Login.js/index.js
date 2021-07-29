import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

function Login(props) {
  const [form, setForm] = useState({ email: "", password: "" });
  const auth = useAuth();
  const handleOnChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(form.email, form.password).then((e) => {
      console.log(e);
    });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            name="email"
            type="text"
            placeholder="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-control">
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-action">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
