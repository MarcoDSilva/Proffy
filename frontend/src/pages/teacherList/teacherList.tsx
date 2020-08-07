import React from "react";
import "./teacherList.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";
import Input from "../../components/Input/Input";


const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffies">
        <form id="search-teachers">

        <Input name="subject" label="Subject" />
        <Input name="week_day" label="Day of the week" />
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
