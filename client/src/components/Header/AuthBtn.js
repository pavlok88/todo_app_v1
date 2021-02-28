import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function AuthBtn() {
  const location = useLocation();

  const LoginBtn = () => (
    <Button
      color="inherit"
      variant="outlined"
      component={RouterLink}
      to="/login"
    >
      Login
    </Button>
  );

  const RegisterBtn = () => (
    <Button
      color="secondary"
      variant="contained"
      component={RouterLink}
      to="/register"
    >
      Sign Up
    </Button>
  );

  if (location.pathname === "/login") return RegisterBtn();
  if (location.pathname === "/register") return LoginBtn();
  return (
    <>
      <Box pr={1}>{LoginBtn()}</Box>
      {RegisterBtn()}
    </>
  );
}
