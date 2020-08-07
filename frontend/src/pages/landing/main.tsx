import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIco from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeartIco from "../../assets/images/icons/purple-heart.svg";
import "./landing.css";

const Landing = () => {
  return (
    <div id="page-landing">
      <section id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy logo" />
          <h2>Your online studies platform</h2>
        </div>

        <img src={landingImg} alt="landing image" className="hero-img" />

        <section className="btn-container">
          <Link to="study" className="study">
            <img src={studyIco} alt="" /> Studemt
          </Link>

          <Link to="teaching" className="give-classes">
            <img src={giveClasses} alt="" /> Teacher
          </Link>
        </section>

        <span className="total-connections">
          Total of 200 established connections
          <img src={purpleHeartIco} alt="" />
        </span>
      </section>
    </div>
  );
};

export default Landing;
