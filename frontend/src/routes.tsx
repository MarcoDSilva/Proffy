import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing/main";
import TeacherList from "./pages/teacherList/teacherList";
import TeacherForm from "./pages/teacherForm/teacherForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/teaching" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
