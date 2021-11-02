import axios from "axios";
import config from "../../config";


export function productAPILoading(){
    return {type: "PRODUCT_LOADINGS"}
}
export function productAPIError(){
    return {type: "PRODUCT_ERRORS"}
}
export function addSingleProducts(data){
    return {type: "ADD_SINGLE_PRODUCT", payload :data}
}
export function getAllProducts(data){
    return {type: "ADD_ALL_PRODUCTS", payload :data}
}
export const deleteItem = (id) => {
    return{
       type: "DELETE_ITEM",
       payload: id
    }
 }




export function productApiAction(data){   // data = {email : dff, password: lmmkk}
    return async (dispatch) => {
        try{
            // loading
            dispatch(productAPILoading());
            const res = await axios.post(`${config.BACKENDURL}/product/add`, data,
                {withCredentials: true})
            console.log(res)
            if (res.status === 200 && res.data.success===1){
                console.log("calling")
                console.log("#",res.data)
                dispatch(addSingleProducts(res.data.product))
                // history.push("/home")
            }
            else{
                dispatch(productAPIError());
            }
        }
        catch(err){
            console.log(err)
            dispatch(productAPIError());
        }
    }
}



export function getAllProductsAction(){
    console.log("-- fetching all data")
    return async (dispatch) => {
        try{
            // loading
            dispatch(productAPILoading());
            const res = await axios.get(`${config.BACKENDURL}/product`,{withCredentials: true})
            console.log(res)
            if (res.status === 200 && res.data.success===1){
                console.log("calling")
                console.log("#",res.data)
                dispatch(getAllProducts(res.data.products))
                // history.push("/home")
            }
            else{
                dispatch(productAPIError());
            }
        }
        catch(err){
            console.log(err)
            dispatch(productAPIError());
        }
    }
}



// delete ---

export const fetchDeleteMessage = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.delete(`${config.BACKENDURL}/product/${id}`,{withCredentials: true})
            if(res.status === 200 && res.data.success === 1  && res.data.status ===true){
                console.log("delete item api works")
                dispatch(deleteItem(id))
            }
            
        }
        catch(err){
                console.log(err)
                dispatch(deleteItem());
            }
    }
}