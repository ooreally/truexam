import React from "react";
import { Link } from "react-router-dom";
import "./Instructor.css";

export default function Instructor() {
  return (
    <div className="instructor">
      
      <h1 className="heading main-heading"><img src="https://lh4.googleusercontent.com/1eV0cYZK4l4u2d8kpgGWSg2DUhpGkA1JOs_3Y37TDT-haHORf__qiUACpEccp69l5CFtiKHCBO4Z7D_q9ChDUF4=w16383"/> Instructor Portal</h1>
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