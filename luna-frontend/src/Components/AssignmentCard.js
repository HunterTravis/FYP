const AssignmentCard = (props) => {
  const { title, course, dueDate } = props.data;
  return (
    <div className="assignment-card d-flex justify-content-between">
      <div className="assignment__description">
        <h3 id="title">{title}</h3>
        <p id="course">{course}</p>
      </div>
      <div className="assignment__dueDate">
        <p id="due-date">{dueDate}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
