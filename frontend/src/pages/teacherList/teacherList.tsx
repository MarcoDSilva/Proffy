import React from "react";
import "./teacherList.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import TeacherItem from "../../components/TeacherItem/TeacherItem";


const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffies">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">day of the week</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hour</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
