import { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const checkFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={checkFocused}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
