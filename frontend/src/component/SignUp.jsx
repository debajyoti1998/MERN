import React,{useState} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from 'react-router-dom';
import signupapi from '../redux/auth/action';
import { useDispatch } from 'react-redux';

const From=styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 200px;

    
`;
const Input=styled.input`
    font-size: 20px;
`;
// const Button=styled.button`
// color: red;
// display:flex;

// `;
const Check=styled(Checkbox)`
display: flex;
align-items: flex-start;

`;

function SignUp() {
    const history=useHistory();
    const[user,setUser]=useState({
        name:"",email:"",password:""
    });
    const dispatch = useDispatch()
    let name ,value;
    const hendleinput=(e)=>{
        // console.log(e);
        name=e.target.name;
        value=e.target.value
        setUser({...user,[name]:value});       
    }
    
    const Postdata = async (e)=>{
        e.preventDefault();
        dispatch(signupapi(user,history))
        // const {name,email,password} = user;
        // const res = await fetch("https://localhost:8000/user/signup",{
        //     method: "POST",
        //     headers:{
        //        "Content-Type":"application/json"
        //     },
        //     credentials: 'include',  
        //     body:JSON.stringify({
        //         name,email,password
        //     })
            
        // });
        // const data = await res.json();
        // console.log("########3",data)
        // if (data.status === 422 || !data){
        //     console.log("invalid ragistation")
        // }
        // else{
        //     console.log("register succesful");
    //         history.push("/");
    //     }
    }



    return (
        <div>
            
            <From method='POST'>
                {/* <h1>Ragistation form</h1> */}
                <Input type="text" name="name" id="name" value={user.name} onChange={hendleinput}  placeholder="enter your name"/><br/><br/>
                <Input type="email" name="email" id="email" value={user.email} onChange={hendleinput} placeholder="enter your email"/><br/><br/>
                <Input type="password" name="password" id="password" value={user.password} onChange={hendleinput} placeholder="enter password"/> <br/>
                <Button variant="contained" onClick={Postdata}>Ragistation</Button>
                {/* <Check  value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/> */}
            </From>
        </div>
    )
}

export default SignUp
