import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Button from "../components/Button";

function Auth({ children, header }) {
  return (
    <div className="container">
      <div className="header">{header}</div>
      {children}
      <div className="socialIcons">
        <Button name="icon facebook">
          <FaFacebookF />
        </Button>
        <Button name="icon google">
          <FaGoogle />
        </Button>
        <Button name="icon twitter">
          <FaTwitter />
        </Button>
      </div>
    </div>
  );
}

export default Auth;
