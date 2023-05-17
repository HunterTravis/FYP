import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AddMarks.css";

function AddMarks(props) {
  const location = useLocation();
  const { courseCode, section } = location.state;

  return (
    <div>
      <div className="container">
        <h1>Marks Distribution</h1>
        <div className="assessments-list">
          <div className="assignments">
            <div>
              <h5>Assignments</h5>
            </div>
            <table className="assignments-list">
              <thead>
                <th>Assignment #</th>
                <th>Weightage</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
                <th>Average</th>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMarks;
