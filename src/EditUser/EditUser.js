import React, { Component } from "react";
import { connect } from "react-redux";
import "../show/ShowUser.scss";
class EditUser extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newFname = this.getFname.value;
        const newSname = this.getSname.value;
        const newAge = this.getAge.value;
        const data = {
            newFname,
            newSname,
            newAge
        }
        this.props.dispatch({ type: 'UPDATE_USER', id: this.props.user.id, data: data })
    }
    render() {
        return (
            <div className="user-container">
                 <h4 className="user_heading">Edit your details</h4>
                <form className="form" onSubmit={this.handleEdit}>
                <label>First Name : </label>
                    <input required type="text" ref={(input) => this.getFname = input}
                    defaultValue={this.props.user.Fname}  /><br /><br />
                    <label>Last Name : </label>
                    <input required type="text" ref={(input) => this.getSname = input} 
                    defaultValue={this.props.user.Sname}/><br /><br />
                    <label>Age :</label>
                    <input required type="number" ref={(input)=>this.getAge=input}
                    defaultValue={this.props.user.Age}/><br/><br/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default connect()(EditUser);