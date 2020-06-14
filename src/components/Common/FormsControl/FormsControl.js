import React from "react";
import classes from "./FormsControl.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <textarea {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

// export const Textarea = (props) => {
//   const [input, ...restProps] = props;
//   return (
//     <formControl {...props}>
//       <textarea {...input} {...restProps} />
//     </formControl>
//   );
// };

// https://redux-form.com/8.3.0/examples/fieldlevelvalidation/

// export const Input = (props) => {
//   const [input, ...restProps] = props;
//   return (
//     <formControl {...props}>
//       <input {...input} {...restProps} />
//     </formControl>
//   );
// };

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <input {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
  </div>
);
