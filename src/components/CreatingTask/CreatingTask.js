import React, { useState, useRef } from "react";
import "./CreatingTask.css";

export default function Scoring() {
  const [imgEmpty, setImgEmpty] = useState(true);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const inputRef = useRef();
  const previewRef = useRef();
  
  const submitHandler = () => {
    // LOGIC TO SEND DATA TO DATABASE
    alert("Task will be Created Successfully if we connect to database")
    window.history.go(-1);
    return false;
    
  };

  const previewImage = () => {
    setImgEmpty(false);

    const oFReader = new FileReader();
    oFReader.readAsDataURL(inputRef.current.files[0]);

    oFReader.onload = (oFREvent) => {
      console.log(previewRef.current);
      previewRef.current.src = oFREvent.target.result;
      console.log(previewRef.current);
    };
  };

  let preview = (
    <img className="img-prev" alt="Preview" ref={previewRef}></img>
  );

  if (imgEmpty) {
    preview = <div className="img-empty">Image Preview</div>;
  }

  return (
    <div className="create-task">
      <button
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
        className="btn-back btn-green"
      >
        Back
      </button>
      <h1 className="main-heading">Create a Task</h1>
      
      <div className="creating_content">
        <div className="left">
          {preview}
          <div className="left-bottom">
            <input
              type="file"
              id="file"
              className="file-input"
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={previewImage}
            />
            <label htmlFor="file" className="file-label btn-green">
              <span style={{fontWeight: "bold",fontSize:"1.2rem", marginBottom:"3rem"}}>Choose Image</span>
            </label>
          </div>
          
        </div>

        <div className="right">
          <input
            placeholder="Task Name"
            type="text"
            className="task-name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            name="description"
            className="description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          ></textarea>
           
        </div>
        
      </div>
      <div  
      
              onClick={submitHandler}
              
              className="submit-btn btn-green"
            >
              
              Submit
              
          </div>
          
    </div>
  );
}
