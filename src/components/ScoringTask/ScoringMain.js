import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ScoringTask.css";

export default function ScoringMain() {
  const [searchTask, setSearchTask] = useState("");

  return (
    <div className="main">
      <div className="main-top">
        <input
          type="text"
          placeholder="Task Name / ID (like Task1)"
          className="main-input"
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
        <Link
          style={{
            textDecoration: "none",
          }}
          to={`/score/${searchTask}`}
        >
          <div className="search btn-green">
            Search by ID
          </div>
        </Link>
      </div>
      <Link
        style={{
          textDecoration: "none",
          width: "max-content",
          margin: "auto",
        }}
        to="/score/all"
      >
        <div className="view-all btn-green">
          View All Submissions
        </div>
      </Link>
    </div>
  );
}
