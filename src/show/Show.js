import React, {Component} from "react";
import { connect } from "react-redux";
 import Showuser from "./ShowUser"
 import EditUSer from "../EditUser/EditUser"


class Show extends Component{
    render(){
        return(
            <div>
                <h3>User details</h3>
                {console.log(this.props.posts)}
       {/* maping props  to another Components          */}
        {this.props.posts.map((user) => (
        <div key={user.id}>
            {user.editing ?<EditUSer user={user} key={user.id}/>:
        <Showuser key={user.id} user={user}/>}
        </div>
        ))} 
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