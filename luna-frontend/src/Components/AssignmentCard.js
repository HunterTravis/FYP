const AssignmentCard = (props) => {
  const { title, course, dueDate } = props.data;
  return (
    <div className="assignment-card d-flex">
      <div className="description">
        <h3 id="title">{title}</h3>
        <p id="course">{course}</p>
      </div>
      <div className="dueDate">
        <p id="due-date">{dueDate}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
