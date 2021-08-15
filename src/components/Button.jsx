import React from "react";
import "../styles/button.scss";
function Button({ btnText, name, children }) {
  return (
    <button className={`btn ${name ? name : ""}`}>{btnText || children}</button>
  );
}

export default Button;
