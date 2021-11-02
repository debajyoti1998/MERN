import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListIcon from "@material-ui/icons/List";
import Button from "@material-ui/core/Button";

import { useDispatch ,useSelector } from 'react-redux'
import {logout} from "../redux/auth/action"

const Div = styled.div`
  background-color: #c8fffa;
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  @media (max-width: 786px) {
    display: none;
  }
`;

const LinkMenu = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
  padding: 0 20px;
  flex-wrap: nowrap;
  display: flex;
`;
const IconMenu = styled.div``;

function Navbar() {
  const user = useSelector((store) => store.auth.user);
  const [side, setside] = useState(false);
  const hendleSidebar = () => {
    setside(!side);
  };
  const dispatch=useDispatch()
  const userLogout = () =>{
    dispatch(logout())
  }
  return (
    <Div>
      <IconMenu>
        <ListIcon
          style={{ fontSize: 40, cursor: "pointer" }}
          onClick={hendleSidebar}
        />
      </IconMenu>
      <NavBar>
        <LinkMenu to="/product">Add Product</LinkMenu>
        <LinkMenu to="/">Contact Us</LinkMenu>
        <LinkMenu to="/">Product</LinkMenu>
        {user ? (
          <React.Fragment>
            <Button variant="contained" color="primary" onClick={userLogout}>
                Logout
            </Button>
            
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/ragistation">
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px" }}
              >
                SignUp
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" color="primary">
                SignIn
              </Button>
            </Link>
          </React.Fragment>
        )}

        {/* <Link to="/ragistation"><Button variant="contained" color="primary" style={{marginRight: '20px'}}>
          SignUp
        </Button></Link>
        <Link to="/login"><Button variant="contained" color="primary">
        SignIn
        </Button></Link>
        <Link to="/logout"><Button variant="contained" color="primary">
        Logout
        </Button></Link> */}
      </NavBar>

      {/* <Link to="/ragistation">ragistation</Link>
            <Link to="/">Home</Link> */}
    </Div>
  );
}

export default Navbar;
