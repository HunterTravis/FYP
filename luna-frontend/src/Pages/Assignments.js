import Sidebar from "../Components/Sidebar";
import AssignmentCard from "../Components/AssignmentCard";

const assignmentData = [
  {
    title:'Assignment 3',
    course:'PPIT Fall 22',
    dueDate:'Sunday, Nov 23'
  },
  {
    title:'Term Project Proposal',
    course:'Information Security Fall 22',
    dueDate:'Sunday, Nov 23'
  },
  {
    title:'Project Presentation',
    course:'DDR BSE-7A',
    dueDate:'Thursday, Dec 17'
  }
]

const Assignments = () => {
  return (
    <div className="assignments d-flex">
      <Sidebar />
      <div className="container">
        <h1>Assignments</h1>
        <AssignmentCard data={assignmentData[0]} />
        <AssignmentCard data={assignmentData[1]} />
        <AssignmentCard data={assignmentData[2]} />
      </div>
    </div>
  );
};

export default Assignments;
