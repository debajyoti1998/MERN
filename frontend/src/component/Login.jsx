import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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


  const LoginUser = async (e) => {
    e.preventDefault();
    if (email && password) {
      const res = await fetch("https://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      
      if (!data || data.status === 400 || data.error ){
        console.log("invalid cradential or server error");
      }
      else {
        console.log("login success");
        history.push("/");
      }
    }
    else{
      console.log("user and pass req");
    }
  };

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
      </Form>
    </Div>
  );
}

export default Login;
