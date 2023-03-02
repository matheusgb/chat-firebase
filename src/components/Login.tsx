import React from "react";
import { auth, provider } from "../services/firebase"

export default function Login() {

  function handleLogin() {
      auth.signInWithPopup(provider);
  }

  return (
    <button onClick={handleLogin}> Login </button>
  );
}