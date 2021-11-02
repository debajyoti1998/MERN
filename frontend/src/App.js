import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useSelector } from "react-redux";

import SignUp from "./component/SignUp";
import Home from "./component/Home";
import Navbar from "./navbar/Navbar";
import Login from "./component/Login";
import Product from "./component/Product";
import NoMatch404 from "./component/page404";

/**
 * Private routes are only assiblebele after user login
 * depending on auth = useAuth(); value (true or false)
 * one can access the proted=cted route or
 * will be redirected to '/login' route
 */
function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((store) => store.auth.user);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

/**
 * MyRoutes will consists of all routes : public and protected routes
 *  public routes can be visited without user auth login
 * protected routes can only be visited after user auth login
 */
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{marginTop:65}}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/ragistation">
            <SignUp />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <PrivateRoute path="/product">
            <Product />
          </PrivateRoute>

          <Route path="*">
            <NoMatch404 />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}
