import React, { Component } from "react";
import { connect } from "react-redux";
import "./ShowUser.scss";

class Showuser extends Component {
  render() {
    return (
      <div>
        {/* set props value to table */}
        <table>
          <tr>
            <th>first name</th>
            <th>second name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>option</th>
          </tr>
          <tr>
            <td>{this.props.user.Fname}</td>
            <td>{this.props.user.Sname}</td>
            <td>{this.props.user.Age}</td>
            <td>{this.props.user.Gender}</td>
            <td>
              <button
                className="edit"
                onClick={() =>
                  this.props.dispatch({
                    type: "EDIT_USER",
                    id: this.props.user.id,
                  })
                }
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() =>
                  this.props.dispatch({
                    type: "DELETE_USER",
                    id: this.props.user.id,
                  })
                }
              >
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default connect()(Showuser);
