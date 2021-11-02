import axios from "axios";
import config from "../../config";


export function apicallStart1(){
    return {type: "USER_LOADING"}
}
export function apicallError1(){
    return {type: "USER_ERROR"}
}
export function apicallResult1(data){
    return {type: "UPDATE_USER", payload :data}
}
export function logout(){
    return {type: "USER_LOGOUT"}
}



export function loginApiCall(data,history){   // data = {email : dff, password: lmmkk}
    return async (dispatch) => {
        try{
            // loading
            dispatch(apicallStart1());
            const res = await axios.post(`${config.BACKENDURL}/user/login`, data,
                {withCredentials: true})
            console.log(res)
            if (res.status === 200 && res.data.success===1){
                console.log("calling")
                dispatch(apicallResult1(res.data.user))
                history.push("/home")
            }
            else{
                dispatch(apicallError1());
            }
        }
        catch(err){
            console.log(err)
            dispatch(apicallError1());
        }
        
        
        
    }
}


export function signupapi(data,history){   // data = {email : dff, password: lmmkk}
    return async (dispatch) => {
        try{
            // loading
            dispatch(apicallStart1());
            const res = await axios.post('https://localhost:8000/user/signup', data,
                {withCredentials: true})
            console.log(res)
            if (res.status === 200 && res.data.success===1){
                console.log("calling")
                dispatch(apicallResult1(res.data.user))
                history.push("/home")
            }
            else{
                dispatch(apicallError1());
            }
        }
        catch(err){
            console.log(err)
            dispatch(apicallError1());
        }
        
        
        
    }
}




