import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {logged} from '../Store/Actions/index';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch();

  return <button
    data-testid="loginBtn"
    onClick={() => {
      loginWithRedirect()
      dispatch(logged())
    }}>Log In {isLogged} </button>;
};

export default LoginButton;