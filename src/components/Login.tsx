import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { loggedIn, setLoggedIn } = useAuth();
  if (loggedIn) return <Navigate to="/home" />;

  return <div onClick={() => setLoggedIn(true)}>Login</div>;
}
