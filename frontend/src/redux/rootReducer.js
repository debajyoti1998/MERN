import { combineReducers } from "redux";
import { apicallReducer } from '../redux/auth/reducer'
import {productApis} from '../redux/product/reducer'

const mainreducer= combineReducers({
    auth:apicallReducer,
    prod:productApis
});
  
export default mainreducer