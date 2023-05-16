import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AssignmentSubmission.css";

function AssignmentSubmission() {
  const location = useLocation();
  const { assignmentTitle, assignmentDescription, assignmentDueDate } =
    location.state;
  // console.log(assignmentTitle);
  // State for user uploaded files
  const [userFiles, setUserFiles] = useState([]);

  // State for user comments
  const [userComments, setUserComments] = useState("");

  // State for public comments
  const [publicComments, setPublicComments] = useState([]);

  // State for private comments by instructor
  const [privateComments, setPrivateComments] = useState("");

  // Function to handle adding files
  const handleAddFile = (e) => {
    const file = e.target.files[0];
    setUserFiles((prevState) => [...prevState, file]);
  };

  // Function to handle submitting assignment
  const handleMarkAsDone = () => {
    // Submit userFiles and userComments to backend
    // Reset state
    setUserFiles([]);
    setUserComments("");
  };

  return (
    <div className="assignment-submission">
      <div className="left-pane">
        <div className="assignment-header">
          <h1>{assignmentTitle}</h1>
          <p>{assignmentDescription}</p>
        </div>
        <div className="attached-resources">
          {/* <h2>Attached Resources</h2> */}
          {/* Render attached resources here */}
        </div>
        <div className="comments">
          <h2>Comments</h2>
          <div className="user-comments">
            <textarea
              value={userComments}
              onChange={(e) => setUserComments(e.target.value)}
              placeholder="Add your comments here"
            ></textarea>
            {/* <button>Post</button> */}
          </div>
          <div className="public-comments">
            Public comments from other students and instructor
            {/* Render public comments here */}
          </div>
        </div>
      </div>
      <div className="right-pane">
        <div className="user-files">
          <h2>Your Work</h2>
          <div>
            {userFiles.map((file) => (
              <p key={file.name}>{file.name}</p>
            ))}
          </div>
          <div className="add">
            <input type="file" onChange={handleAddFile} />
          </div>
          <div className="submit">
            <button onClick={handleMarkAsDone}>Mark as Done</button>
          </div>
        </div>
        <div className="private-comments">
          <h2>Private Comments</h2>
          <textarea
            value={privateComments}
            onChange={(e) => setPrivateComments(e.target.value)}
            placeholder="Add private comments here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AssignmentSubmission;
