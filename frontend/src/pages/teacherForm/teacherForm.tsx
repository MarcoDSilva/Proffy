import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./teacherForm.css";
import Input from "../../components/Input/Input";
import warnIco from '../../assets/images/icons/warning.svg'

const TeacherForm = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="It's amazing that you want to teach with us"
        description="The first step is to fill the register form"
      />

      <main>
        {/* since it's a 'big' form, field set tag is used for a better accesibility*/}
        <fieldset>
          <legend>Your info</legend>
          <Input name="name" label="Full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="whatsApp" />
        </fieldset>

        <fieldset>
          <legend>About the lesson</legend>
          <Input name="subject" label="Subject" />
          <Input name="avatar" label="Hourly cost of the lesson (in €)" />
        </fieldset>

        <fieldset>
          <legend>Available schedule</legend>
        </fieldset>

        <footer>
          <p>
            <img src={warnIco} alt="" />
            Important! <br />
            Fill all the form data
          </p>
          <button type="button">
            Save user
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
