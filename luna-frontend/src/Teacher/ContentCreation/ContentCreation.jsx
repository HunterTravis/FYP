import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./ContentCreation.css";

function TeacherContentCreation(props) {
  const location = useLocation();
  const { type , courseCode,section} = location.state;
  const [cookies] = useCookies(["user"]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [dueDate, setDueDate] = useState("");
  
  const handlePost = () => {
    if (type === "Assignment" && !file) {
      alert("Please select a file.");
      return;
    }
  
    if (type === "Assignment" && !dueDate) {
      alert("Please enter a due date.");
      return;
    }
    
    
    const formData = new FormData();
    const teacherID = cookies.username;
    const modifiedFileName =teacherID+file.name;
    if(!title)
    {
      alert("Please enter a title.");
      return;
    }
    else{
      formData.append("title", title);

    }
    formData.append("type", type);
    if(!description)
    {
      alert("Please enter a description.");
      return;
    }
    else{
      formData.append("description", description);
    }
    if (type === "Assignment") {
      formData.append("file", file, modifiedFileName);
      formData.append("dueDate", dueDate);
    } else if (type === "Resource" && file) {
      formData.append("file", file, modifiedFileName);
    }
    formData.append("courseCode", courseCode);
    formData.append("section", section);

    // Add logic to make API call with the formData
    // Example:
    fetch("http://localhost:3001/TeacherCreate", {
       method: "POST",
       body: formData,
     })
       .then((response) => response.json())
       .then((data) => {
         if(data.data==="Created Successfully")
         {alert("Created Successfully")
          window.location.reload();
        }
          else
          alert("Error")
          //Handle response
       })
       .catch((error) => {
         console.log(error);
          //Handle error
       });
  };

  return (
    <div>
      <div className="container">
        <h1>{type} Creation</h1>
        <div className="creation-form">
          <div className="form-input">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {type === "Announcement" && (
            <div className="form-input-text">
              <textarea
                rows={5}
                cols={50}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          )}
          {type !== "Announcement" && (
            <div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-input">
                <input
                  type="file"
                  placeholder="Add File"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {type === "Assignment" && (
                <div className="form-input">
                  <input
                    type="date"
                    placeholder="Due Date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}
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

export default TeacherContentCreation;
