import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/truxam_Logo.png";
import "./Instructor.css";

export default function Instructor() {
  return (
    <div className="instructor">
      
      <h1 className="heading main-heading"><img src={logo}/> Instructor Portal</h1>
      <div className="content_main">
        <Link
          style={{ textDecoration: "none", width: "max-content" }}
          to="/add"
        >
          <div className="button btn-green one">Add a Task</div>
        </Link>
        <Link
          style={{ textDecoration: "none", width: "max-content" }}
          to="/score"
        >
          <div className="button btn-green two">Review Tasks</div>
        </Link>
      </div>
    </div>
  );
}