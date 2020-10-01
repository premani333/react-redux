import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserDetails.scss";

class User extends Component {
  constructor() {
    super();

    this.state = {
      gender: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const Fname = this.getFname.value;
    const Sname = this.getSname.value;
    const Age = this.getAge.value;
    const Gender = this.state.gender;
    const data = {
      id: new Date(),
      Fname,
      Sname,
      Age,
      Gender,
      editing: false,
    };
    console.log(Gender);

    // console.log(data);
    this.props.dispatch({
      type: "ADD_USER",
      data,
    });
    this.getFname.value = "";
    this.getSname.value = "";
    this.getAge.value = "";
    this.state.gender = "";
  };
  // handleEdit = (e) => {
  //   e.preventDefault();
  //   const newFname = this.getFname.value;
  //   const newSname = this.getSname.value;
  //   const newAge = this.getAge.value;
  //   const newGender = this.getGender.checked;
  //   const data = {
  //     newFname,
  //     newSname,
  //     newAge,
  //     newGender,
  //   };
  //   this.props.dispatch({
  //     type: "UPDATE_USER",
  //     id: this.props.user.id,
  //     data: data,
  //   });
  // };

  render() {
    return (
      <div className="user-container">
        <h4 className="user_heading">Enter details</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>First Name : </label>
          <input
            required
            type="text"
            ref={(input) => (this.getFname = input)}
            // defaultValue={this.props.user.Fname}
            placeholder="Enter your first name"
          />
          <br />
          <br />
          <label>Last Name : </label>
          <input
            required
            type="text"
            ref={(input) => (this.getSname = input)}
            placeholder="Enter your last name"
          />
          <br />
          <br />
          <label>Age :</label>
          <input
            required
            type="number"
            ref={(input) => (this.getAge = input)}
            placeholder="Enter your age"
          />
          <br />
          <br />
          <div onChange={this.handleChange}>
            <label>Gender : </label>
            <label>
              <input
                type="radio"
                value="Male"
                name="gender"
                checked={this.state.gender === "Male"}
                onChange={this.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                name="gender"
                checked={this.state.gender === "Female"}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                name="gender"
                checked={this.state.gender === "Other"}
                onChange={this.handleChange}
              />
              Other
            </label>
          </div>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default connect()(User);
