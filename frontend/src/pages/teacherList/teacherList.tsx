import React, { useState, FormEvent } from "react";
import "./teacherList.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem/TeacherItem";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Api from "../../services/api";

const TeacherList = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  // never forget to pass the type FormEvent in this type of handling methods
  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    // in typescript we need to use "params" to send an object with the query elements
    const res = await Api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(res.data)
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffies">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            required
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
          <Select
            name="week_day"
            label="Day of the week"
            required
            onChange={(e) => setWeekDay(e.target.value)}
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
            type="time"
            name="time"
            label="Hour"
            required
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher : Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
