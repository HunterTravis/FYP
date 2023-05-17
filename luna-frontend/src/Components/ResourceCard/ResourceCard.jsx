import React from "react";
import { useCookies } from "react-cookie";
import "./ResourceCard.css";

const ResourceCard = (props) => {
  const { resourceID,resourceName, resourceDescription, resourceLink } = props;
  const [cookies, setCookie] = useCookies(["user"]);

  const handleDownload = (name, link) => {
    const Link = document.createElement("a");
    Link.setAttribute("href", link);
    Link.setAttribute("download", name);
    document.body.appendChild(Link);
    Link.click();
    document.body.removeChild(Link);
  };

  const handleDelete = () => {
    fetch("http://localhost:3001/TeacherDeleteResource", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resourceID: resourceID, username: cookies.username }),
    }
    ).then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.data=="Resource Deleted") {
        alert("Resource deleted successfully!");
        window.location.reload();
      } else {
        alert("Resource deletion failed!");
      }
    }
    );
  };

  return (
    <div className="assignment-card d-flex justify-content-between">
      <div className="assignment__title">
        <h5>{resourceName}</h5>
        <p>{resourceDescription}</p>
      </div>
      <div className="assignment__dueDate">
        {cookies.role === "teacher" ? (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => handleDownload(resourceName, resourceLink)}
            >
              Open
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleDownload(resourceName, resourceLink)}
          >
            Open
          </button>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
