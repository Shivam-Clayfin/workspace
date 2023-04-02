import React from "react";
const Button = (props) => {
  let classname = props.buttonclassName || "mb-3";
  
  return (
    <>
      <button
        autoFocus={props.autoFocus}
        form={props.form}
        formAction={props.formAction}
        className={classname}
        id={props.buttonID}
        formEncType={props.formEncType}
        formMethod={props.formMethod}
        formNoValidate={props.formNoValidate}
        formTarget={props.formTarget}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
        name={props.name}
        style={props.style}
      >
        {props.buttonText}
      </button>
      {props.errorMsg ? (
        <div className="invalid-feedback d-block">{props.errorMsg}</div>
      ) : null}
    </>
  );
};

export default Button;
