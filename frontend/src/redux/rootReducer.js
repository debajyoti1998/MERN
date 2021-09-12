import { combineReducers } from "redux";
import { apicallReducer } from './auth/reducer'

const mainreducer= combineReducers({
    auth:apicallReducer
});
  
export default mainreducer