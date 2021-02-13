import React from "react";
import { Link } from "react-router-dom";
import "./ScoringTask.css";

export default function ScoringCard({ orgImg, taskId }) {
  return (
    <Link
      to={`/score/${taskId}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{ backgroundImage: `url("${orgImg}")` }}
        className="card"
      >
        <span className="card-text">{taskId}</span>
      </div>
    </Link>
  );
}
