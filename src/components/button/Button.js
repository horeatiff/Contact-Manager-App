import React from "react";

const Button = ({ type = "button", children, onClick, className = "" }) => {
  const handleOnClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button className={`btn ${className}`} type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
