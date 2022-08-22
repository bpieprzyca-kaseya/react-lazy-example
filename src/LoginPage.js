import * as React from "react";

import { fakeAuthProvider } from "./auth";

import {
  useNavigate,
} from "react-router-dom";

export default function LoginPage() {
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    fakeAuthProvider.signin(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at /</p>

      <form onSubmit={handleSubmit}>
        <button >Login</button>
      </form>
    </div>
  );
}