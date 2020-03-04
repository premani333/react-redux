import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const Fname = this.getFname.value;
        const Sname = this.getSname.value;
        const data = {
            Fname,
            Sname,
        }
        // console.log(data);
        this.props.dispatch({
            type:'ADD.POST',
            data})
       this.getFname.value="";
       this.getSname.value="" ;  
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>First Name : </label>
                    <input required type="text" ref={(input) => this.getFname = input} /><br /><br />
                    <label>Last Name : </label>
                    <input required type="text" ref={(input) => this.getSname = input} /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect()(User);