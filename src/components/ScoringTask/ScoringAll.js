import React from "react";
import "./ScoringTask.css";
import ScoringCard from "./ScoringCard";
import submissions from "../../DummyData";

export default function ScoringAll() {
  return (
    <>
      <h2 className="all-subheading">Select a Task</h2>
      <div className="all">
        {submissions.map((sub) => (
          <ScoringCard
            key={sub.taskID}
            orgImg={sub.original}
            taskId={sub.taskID}
          />
        ))}
      </div>
    </>
  );
}
