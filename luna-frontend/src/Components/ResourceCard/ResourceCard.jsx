import React from "react";
import "./ResourceCard.css";

const ResourceCard = (props) => {
  const { resourceName, resourceDescription, resourceLink } = props;

  const handleDownload = (name, link) => {
    const Link = document.createElement("a");
    Link.setAttribute("href", link);
    Link.setAttribute("download", name);
    document.body.appendChild(Link);
    Link.click();
    document.body.removeChild(Link);
  };

  return (
    <div className="assignment-card d-flex justify-content-between">
      <div className="assignment__title">
        <h5>{resourceName}</h5>
        <p>{resourceDescription}</p>
      </div>
      <div className="assignment__dueDate">
        <button
          className="btn btn-primary"
          onClick={() => handleDownload(resourceName, resourceLink)}
        >
          Open
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
