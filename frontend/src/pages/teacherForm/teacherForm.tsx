import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./teacherForm.css";
import Input from "../../components/Input/Input";
import warnIco from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/Select";
import Api from "../../services/api";

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, to: "", from: "" },
  ]);

  //states for new teacher info
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState({});
  const [price, setPrice] = useState("");

  // adds a new schedule item : TODO FIX - maybe use an id for the key to render
  const addNewSchedule = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: scheduleItems.length + 1, to: "", from: "" },
    ]);
  };

  // we loop through the object that owns all the schedule items
  // if it's in the position of the element being updated, we updated the values
  // in typescript we use [] around the variable name, because we want to use the name that came through the parameter
  const setScheduleItemValue = (index: number, day: string, value: string) => {
    const updatedValues = scheduleItems.map((item, i) => {
      if (i === index) {
        return { ...item, [day]: value };
      }
      return item;
    });

    setScheduleItems(updatedValues);
  };

  const clearForms = () => {
    setName("");
    setAvatar("");
    setWhatsApp("");
    setBio("");
    setSubject("");
    setPrice("");
    setScheduleItems([]);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    Api.post("classes", {
      name,
      avatar,
      whatsapp : whatsApp,
      bio,
      subject,
      cost: Number(price),
      schedule: scheduleItems,
    })
      .then(() => {
        alert("Registration complete!");
        clearForms();
      })
      .catch(() => {
        console.log("error while inserting data");
      });
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="It's amazing that you want to teach with us"
        description="The first step is to fill the register form"
      />

      <main>
        {/* since it's a 'big' form, field set tag is used for a better accesibility*/}
        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Your info</legend>
            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="whatsApp"
              value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>About the lesson</legend>
            <Select
              name="subject"
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
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
            <Input
              name="avatar"
              label="Hourly cost of the lesson (in €)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available schedule:
              <button type="button" onClick={addNewSchedule}>
                + New Schedule
              </button>
            </legend>

            {scheduleItems.map((schedule, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Day of the week"
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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

                  <Input
                    name="from"
                    label="From"
                    type="time"
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warnIco} alt="Important Warning" />
              Important! <br />
              Fill all the form data
            </p>
            <button type="submit">Save user</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
