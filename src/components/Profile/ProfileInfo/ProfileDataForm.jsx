import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormsControl/FormsControl";
import classes from "./ProfileInfo.module.css";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>fullName: </b> {createField("Full name", "FullName", [], Input)}
      </div>
      <div>
        <b>lookingForAJob: </b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills: </b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me: </b>
        {createField("About me", "About me", [], Textarea)}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={classes.contact}>
              <b>
                {key}: {createField("key", "contacts." + key, [], Input)}{" "}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
