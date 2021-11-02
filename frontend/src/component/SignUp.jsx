import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import { signupapi } from "../redux/auth/action";
import { useDispatch } from "react-redux";
import "./signup.css";

// const From=styled.form`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     padding-top: 200px;

// `;
// const Input=styled.input`
//     font-size: 20px;
// `;
// const Button=styled.button`
// color: red;
// display:flex;

// `;
// const Check=styled(Checkbox)`
// display: flex;
// align-items: flex-start;
// `;

function SignUp() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  let name, value;
  const hendleinput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault();
    dispatch(signupapi(user, history));
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
    //     history.push("/");
    // }
  };

  return (
    <section >
      <div className="img-div">
        <img src="https://source.unsplash.com/1600x900/?coding" />
      </div>
      <div className="form-div">
        <form className="main-form" method="POST">
          <h1>Ragistation form</h1>
          <div className="input-div">
            <span>Name</span>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={hendleinput}
            placeholder="enter your name"
          />
          </div>
          <br />
          <br />
          <div className="input-div">
          <span>Email</span>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={hendleinput}
            placeholder="enter your email"
          />
          </div>
          <br />
          <br />
          <div className="input-div">
          <span>Password</span>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={hendleinput}
            placeholder="enter password"
          />
          </div>
          <br />
          <button type="submit" variant="contained" onClick={Postdata}>
            Ragistation
          </button>
          {/* <Check  value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/> */}
        </form>
      </div>
    </section>
  );
}

export default SignUp;
