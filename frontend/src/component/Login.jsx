import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {loginApiCall} from '../redux/auth/action';
import { useDispatch ,useSelector } from 'react-redux'

const Div = styled.div``;

const Input = styled.input`
  font-size: 30px;
`;
const H1 = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  flex-direction: column;
`;
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()

  const data={
    email,password
  }
  const LoginUser = async (e) => {
    e.preventDefault();
    dispatch(loginApiCall(data,history))
  };
  const authStatus = useSelector((store) => store.auth)
  return (   
    <Div>
      <Form method="POST">
        <H1> log in</H1>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <br />
        <br />
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
        <br />
        <br />

        <Button variant="contained" onClick={LoginUser}>
          Signin
        </Button>

        {authStatus && authStatus.loading ? 'Processing ...' : ''}
        {authStatus && authStatus.error ? 'Login Error , Please try after some time ...' : ''}

      </Form>
    </Div>
  );
}

export default Login;
