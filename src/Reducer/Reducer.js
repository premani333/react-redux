const postReducer = (state = [], action) => {
    switch(action.type) {
      //add new user details
        case "ADD_USER":
          return state.concat([action.data]);
       //delete selected user details 
          case"DELETE_USER":
          return state.filter((user)=>user.id != action.id);
       //edit selected user details
          case "EDIT_USER":
            return state.map((user)=>user.id == action.id ? {...user,editing:!user.editing}:user)  
       //updating edited user details     
            case "UPDATE_USER":
            return state.map((user)=>{
              if(user.id===action.id){
                return{
                  ...user,
                  Fname:action.data.newFname,
                  Sname:action.data.newSname,
                  Age:action.data.newAge,
                  editing:!user.editing
                }
              }else return user;
            })
            default:
          return state;
      }

}
export default postReducer;