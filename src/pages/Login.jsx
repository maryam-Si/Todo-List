import React from "react";
import "../styles/register.scss";
import Button from "../components/Button";
import Auth from "../components/Auth";

function Login() {
  return (
    <Auth header="login">
      <form>
        <input
          type="email"
          className="input"
          id="email"
          placeholder="Enter email"
          name="email"
        />
        <input
          type="password"
          className="input"
          id="password"
          placeholder="Enter password"
          name="password"
        />

        <Button name="submit" btnText="submit" />
        <Button name="account" btnText="create account" />
      </form>
    </Auth>
  );
}

export default Login;
