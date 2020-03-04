import redux from "redux";

//Actions
export const INCREAMENT_COUNT="counter/increament";
export const DECREAMENT_COUNT="counter/decreament";

const initialState={
    count:0
}

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case INCREAMENT_COUNT:{
//             return(...state, count: state.count + 1);
//             break;
//         }
//     }
// }