import React, { Component } from "react";

class UserRow extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td>{user.gender === "0" ? "Male" : "Female"}</td>
        <td>{<input type="checkbox" name="status" checked={user.status} />}</td>
        <td>{user.info}</td>
        <td>
          <button className="">X</button>
        </td>
      </tr>
    );
  }
}

export default UserRow;
