import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListIcon from "@material-ui/icons/List";
import Button from '@material-ui/core/Button';

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
  z-index: 1; ;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
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
  return (
    <Div>
      <IconMenu>
        <ListIcon style={{ fontSize: 40 }} />
      </IconMenu>
      <NavBar>
        <LinkMenu to="/product">Add Product</LinkMenu>
        <LinkMenu>Contact Us</LinkMenu>
        <LinkMenu>Product</LinkMenu>
        <Link to="/ragistation"><Button variant="contained" color="primary" style={{marginRight: '20px'}}>
          SignUp
        </Button></Link>
        <Link to="/login"><Button variant="contained" color="primary">
        SignIn
        </Button></Link>
      </NavBar>

      {/* <Link to="/ragistation">ragistation</Link>
            <Link to="/">Home</Link> */}
    </Div>
  );
}

export default Navbar;
