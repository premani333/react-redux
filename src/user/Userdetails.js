import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserDetails.scss";

class User extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const Fname = this.getFname.value;
        const Sname = this.getSname.value;
        const Age = this.getAge.value;
        const data = {
            id: new Date(),
            Fname,
            Sname,
            Age,
            editing: false
        }
        // console.log(data);
        this.props.dispatch({
            type: 'ADD_USER',
            data
        })
        this.getFname.value = "";
        this.getSname.value = "";
        this.getAge.value = "";

    }
    render() {
        return (
            <div className="user-container">
                <h4 className="user_heading">Enter details</h4>
                <form className="form" onSubmit={this.handleSubmit}>

                    <label>First Name : </label>
                    <input required type="text" ref={(input) => this.getFname = input} placeholder="Enter your first name" /><br /><br />
                    <label>Last Name : </label>
                    <input required type="text" ref={(input) => this.getSname = input} placeholder="Enter your last name" /><br /><br />
                    <label>Age :</label>
                    <input required type="number" ref={(input) => this.getAge = input} placeholder="Enter your age" /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect()(User);