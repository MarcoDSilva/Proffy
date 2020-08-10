import React from "react";
import "./teacherList.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffies">
        <form id="search-teachers">
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
          <Input name="time" label="Hour" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
