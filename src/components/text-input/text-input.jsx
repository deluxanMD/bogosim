import React from "react";
import "./text-input.css";

const TextInput = ({ type, placeholder, value, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="TextInput"
    />
  );
};

export default TextInput;
