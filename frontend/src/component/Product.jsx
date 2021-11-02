import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {productApiAction} from '../redux/product/action'
import AllProduct from './AllProduct';


function Product() {
    const user = useSelector((store) => store.prod)
    console.log("%%%",user)

    const [pro,setPro]=useState({
        name:"",purches_price:"",selling_price:""
    })
    const dispatch=useDispatch()
    let name ,value;
    const hendleinput=(e)=>{
        // console.log(e);
        name=e.target.name;
        value=e.target.value
        setPro({...pro,[name]:value});       
    }
    const prosave= async (e)=>{
        e.preventDefault();
        dispatch(productApiAction(pro))
       
       
       
       
        // const {name,purches_price,selling_price} = pro;
        // const res = await fetch("https://localhost:8000/product",{
        //     method: "POST",
        //     headers:{
        //        "Content-Type":"application/json"
        //     },
        //     credentials: 'include',  
        //     body:JSON.stringify({
        //         name,purches_price,selling_price
        //     })
            
        // });
        // const data = await res.json();
        // console.log("########3",data)
        // if (data.status === 422 || !data){
        //     console.log("invalid ragistation")
        // }
        // else{
        //     console.log("register succesful");
        // }
    }
    
    return (
        <div>

            <form style={{paddingTop:100}}>
                <input type="text" name="name" id="name" placeholder="name" value={pro.name} onChange={hendleinput}/><br/><br/>
                <input type="text" name="purches_price" id="purches_price" placeholder="purches" value={pro.purches_price} onChange={hendleinput}  /><br/><br/>
                <input type="text" name="selling_price" id="selling_price" placeholder="selling" value={pro.selling_price} onChange={hendleinput} /><br/><br/>
                <button onClick={prosave}>Add Product</button>
            </form>
            <div>
            <AllProduct/>
           
        </div>
        </div>
    )
}

export default Product
