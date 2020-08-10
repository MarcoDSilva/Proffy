import React, { SelectHTMLAttributes } from "react";
import "./select.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FunctionComponent<SelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} defaultValue="DEFAULT">
        <option value="DEFAULT" disabled hidden>
          Pick a subject:
        </option>
        {options.map((element) => (
          <option key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
