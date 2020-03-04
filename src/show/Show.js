import React, {Component} from "react";
import { connect } from "react-redux";
// import Showuser from "./ShowUser"

class Show extends Component{
    render(){
        return(
            <div>
                <h3>User details</h3>
                
                {this.props.posts.map((user) => 
                <div>
                <p>{user.Fname}{user.Sname}</p>

                {/* {console.log(user)} */}
                
                <button >Edit</button>
                <button>Delete</button>
                </div>)} 
                {/* {console.log(this.props.posts)}             */}
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        posts:state
    }
}
export default connect(mapStateToProps)(Show);