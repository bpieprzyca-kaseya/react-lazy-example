import * as React from "react";
import {
  useNavigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export default function AuthStatus() {
  let navigate = useNavigate();
  let auth = localStorage.getItem('auth-token-test');

  if (!auth) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          fakeAuthProvider.signout(() => navigate("/login"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}