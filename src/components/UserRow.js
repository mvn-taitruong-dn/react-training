import React, { Component } from "react";

class UserRow extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td>{user.gender ? (user.gender === "0" ? "Male" : "Female") : ""}</td>
        <td>
          <input
            type="checkbox"
            name="status"
            checked={user.status}
            onChange={(event) =>
              this.props.handleChangeStatus(user.id, event.target.checked)
            }
          />
        </td>
        <td>{user.info}</td>
        <td>
          <i
            className="fa fa-edit"
            onClick={() => this.props.update(user.id)}
          ></i>
        </td>
        <td>
          <i
            className="fa fa-trash"
            onClick={() => this.props.remove(user.id)}
          ></i>
        </td>
      </tr>
    );
  }
}

export default UserRow;
