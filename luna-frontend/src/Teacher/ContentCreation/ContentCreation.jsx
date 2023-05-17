import React from "react";
import { useLocation } from "react-router-dom";
import "./ContentCreation.css";

function TeacherContentCreation(props) {
  const location = useLocation();
  const { type } = location.state;

  const handlePost = () => {
    console.log("Post");
  };

  if (type === "Announcement") {
    return (
      <div>
        <div className="container">
          <h1>{type} Creation</h1>
          <div className="creation-form">
            <div className="form-input-text">
              <textarea rows={5} cols={50}></textarea>
            </div>
            <div>
              <button className="btn btn-primary" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <h1>{type} Creation</h1>
          <div className="creation-form">
            <div>
              <div className="form-input">
                <input type="text" placeholder="Title" />
              </div>
              <div className="form-input">
                <input type="text" placeholder="Description" />
              </div>
              <div className="form-input">
                <input type="file" placeholder="Add File" />
              </div>
              {type === "Assignment" ? (
                <div className="form-input">
                  <input type="date" placeholder="Due Date" />
                </div>
              ) : null}
            </div>
            <div className="form-input">
              <button className="btn btn-primary" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherContentCreation;
