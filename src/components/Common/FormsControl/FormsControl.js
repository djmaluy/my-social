import React from "react";
import classes from "./FormsControl.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

// https://redux-form.com/8.3.0/examples/fieldlevelvalidation/

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
