import React from "react";
import { auth, provider } from "../../../services/firebase";

export default function LoginButton() {
  function handleLogin() {
    auth.signInWithPopup(provider);
  }

  return <button onClick={handleLogin}> Login </button>;
}
