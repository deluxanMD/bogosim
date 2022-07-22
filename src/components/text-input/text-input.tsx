import React, { FormEvent } from "react";
import "./text-input.css";

interface IProps {
  type: "text" | "number" | "tel" | "url";
  placeholder: string;
  value: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const TextInput = (props: IProps) => {
  const { type, placeholder, value, handleChange } = props;

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
