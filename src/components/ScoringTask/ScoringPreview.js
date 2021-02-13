import React, { useState } from "react";
import "./ScoringTask.css";
import submissions from "../../DummyData";
import { Link } from "react-router-dom";
export default function ScoringPreview({ match }) {
  const [score, setScore] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = submissions.find(
    (sub) => sub.taskID.toLowerCase() === match.params.id.toLowerCase()
  );

  if (!data) {
    return (
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>ID not Found</h1>
    );
  }

  const orgImg = data.original;
  const editedImgs = data.submissions;

  const updateScore = (e) => {
    if (!isNaN(e.target.value) && e.target.value <= 10 && e.target.value >= 0 ) {
      setScore(e.target.value);
    }
  };

  const prevImgHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((old) => old - 1);
    }
  };

  const nextImgHandler = () => {
    if (currentIndex < editedImgs.length - 1) {
      setCurrentIndex((old) => old + 1);
    }
  };

  let sname="Abhinav";
    if(currentIndex === 1)
    sname="Seema";
    else if(currentIndex === 2)
    sname="Narendra";
  return (
    
    <div className="content">
      {/* <h2 className="scoring__img-title">Student Name - Task ID</h2> */}
      <div className="preview">
        <div
          style={{ backgroundImage: `url("${orgImg}")` }}
          className="original"
        >
          <span className="img-type">Original</span>
        </div>
        <div
          style={{ backgroundImage: `url("${editedImgs[currentIndex]}")` }}
          className="edited"
        >
          <span className="img-type">Edited by {sname} </span>
        </div>
      </div>
      <div className="download">
      <a
        href={editedImgs[currentIndex]}
        style={{ textDecoration: "none" }}
        download
      >
        <div className=" btn-green">
          
           Download Edited File
        </div>
      </a>
      </div>
     
      <div className="bottom">
        <div onClick={prevImgHandler} className="previous btn-green">
          Prev
        </div>
        <div className="score">
          Score:&nbsp;
          <input
            // maxlength="1"
            // 10 is 2 digits
            className="score-input"
            type="number"
            min="0"
            placeholder="X"
            value={score}
            onChange={(e) => updateScore(e)}
          />&nbsp;
          /10
        </div>
        <div onClick={nextImgHandler} className="next btn-green">
          Next
        </div>
      </div>
      <div className="done"> 
      <Link
          style={{ textDecoration: "none", width: "max-content" }}
          to="/score"
        >
          <div className="btn-green">Done</div>
        </Link>
    </div></div>
      
  );
}
