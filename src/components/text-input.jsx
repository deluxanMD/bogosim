import React from "react";

const TextInput = ({ type, placeholder, value, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
