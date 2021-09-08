import ACTIONS from "./actionindex";
import { combineReducers } from "redux";


const mycall = {
  loading : false,
  result : null,
  error : false
};
function apicallReducer(state = mycall, action) {
  if (action.type === "LOADING") {
    return {
      loading : true,
      result : null,
      error : false
    };
  } else if(action.type === "ERROR"){
    return {
      loading : false,
      result : null,
      error : true
    };
  }
  else if(action.type === "UPDATE_USER"){
    return {
      loading : false,
      result : action.payload,
      error : false
    };
  }
  else{
    return {
      loading : false,
      result : null,
      error : false
    };
  }
}
const mainreducer= combineReducers({
  auth:apicallReducer
});
export default mainreducer