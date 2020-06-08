import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../Common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../Common/FormsControl/FormsControl.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          type={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={"Input"} />
        remember me
      </div>
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login", // уникальное имя формы
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
