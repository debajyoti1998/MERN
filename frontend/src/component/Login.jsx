import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {loginApiCall} from '../redux/auth/action';
import { useDispatch ,useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';


const Section = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width:768px){

  }
`;
const Div =styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  @media (max-width:768px){
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;

  }
  
`;
const Img=styled.img`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index:1;
  
`;
const Div1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index:1;
  @media (max-width:768px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index:1;
  }
`;
const Form = styled.form`
  position: fixed;
  width: 50%;
  padding: 40px;
  background:rgb(20 50 65 / 0.9);
  margin: 30px;
  box-shadow: 5px 10px;
  @media (max-width:786px){
    width: 100%;
    padding: 40px;
    background:rgb(255 255 255 / 0.9);
    margin: 30px;
  }
`;
const DivInput=styled.div`
  margin-bottom:20px;
`;
  
const DivInput2=styled.div`
  margin-bottom:20px;
  display: flex;
  justify-content: center;
  
  

  button{
    width: 50%;
    padding: 5px 10px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    @media (max-width:786px){
      font-size:20px;
    }
    
  }
`;


const Input = styled.input`
  /* font-size: 30px; */
  /* border-radius: 30px; */
  width: 93%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
  @media (max-width:786px){
    width: 100%;
    padding: 10px 10px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    font-size: 30px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
  }
 
`;
const H1 = styled.h1`
  color: #607d8b;
  font-size:1.5rem;
  text-transform:uppercase;
  margin-bottom: 20px;
  border-bottom:4px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
  /* text-align: center; */
  @media (max-width:786px){
    color: #607d8b;
    text-align: center;
    margin: 30px 0 10px;
    font-weight:500;
  }
`;

// const Form = styled.form`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  flex-direction: column; */
// `;
const Span=styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  display: inline-block;

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
    <Section>
      <Div>
        <Img src="https://source.unsplash.com/1600x900/?coding"/>
      </Div>
      <Div1>
        <Form>
          <H1>Login</H1>
          <DivInput>
            <Span>Email</Span>
            <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email"/>
          </DivInput>
          <DivInput>
            <Span>password</Span>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password"/>
          </DivInput>
          <DivInput>
             <input type="checkbox" name=""/>remamber me
          </DivInput>
          <DivInput2>
            <button type="submit" variant="contained" onClick={LoginUser}>sign in</button>
          </DivInput2>
          <DivInput>
            <p>create account? <a href="ragistation">Log in</a></p>
          </DivInput>
          {authStatus && authStatus.loading ? <CircularProgress disableShrink /> : ''}
          {authStatus && authStatus.error ? 'Login Error , Please try after some time ...' : ''}
        </Form>






      {/* <Form method="POST">
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

        <Button type="submit" variant="contained" onClick={LoginUser}>
          Signin
        </Button>

        {authStatus && authStatus.loading ? <CircularProgress disableShrink /> : ''}
        {authStatus && authStatus.error ? 'Login Error , Please try after some time ...' : ''}

      </Form> */}
      </Div1>
    </Section>
  );
}

export default Login;
