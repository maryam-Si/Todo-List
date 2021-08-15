import React from "react";
import "../styles/register.scss";
import Button from "../components/Button";
import Auth from "../components/Auth";

function RegisterPage() {
  return (
    <Auth header="register">
      <form>
        <input
          type="text"
          className="input"
          id="name"
          placeholder="Enter name"
          name="name"
        />
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
        <input
          type="number"
          className="input"
          id="age"
          placeholder="Enter age"
          name="age"
        />
        <Button name="submit" btnText="submit" />
        <Button name="account" btnText="have An account?" />
      </form>
    </Auth>
  );
}

export default RegisterPage;
