import React, { TextareaHTMLAttributes } from "react";
import "./textArea.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
	name: string,
	label: string
}

const TextArea:React.FunctionComponent<TextAreaProps> = ({name,label, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea;
