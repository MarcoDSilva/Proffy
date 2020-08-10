import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./teacherForm.css";
import Input from "../../components/Input/Input";
import warnIco from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/Select";

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
          <TextArea name="bio" label="Biography" />
        </fieldset>

        <fieldset>
          <legend>About the lesson</legend>
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Science", label: "Science" },
              { value: "PE", label: "PE" },
              { value: "Geography", label: "Geography" },
              { value: "History", label: "History" },
              { value: "English", label: "English" },
              { value: "Mathematics", label: "Mathematics" },
              { value: "Philosofy", label: "Philosofy" },
            ]}
          />
          <Input name="avatar" label="Hourly cost of the lesson (in €)" />
        </fieldset>

        <fieldset>
          <legend>
            Available schedule:
            <button type="button">+ New Schedule</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Day of the week"
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thursday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />

            <Input name="from" label="From" type="time"/>
            <Input name="to" label="To" type="time"/>
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warnIco} alt="Important Warning" />
            Important! <br />
            Fill all the form data
          </p>
          <button type="button">Save user</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
