import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormsControl/FormsControl";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit }) => {
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
      {/* <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return(
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />)
        })}
      </div> */}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
