const GradeCard = ({ data }) => {
  const courses = data;

  return (
    <div className="grade-card">
      <div className="grade-card__header d-flex">
        <h5>Grade Change Request</h5>
      </div>
      <div className="grade-card__body">
        <table>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Type</th>
            <th>Request</th>
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.code}</td>
                <td>{course.cname}</td>
                <td>{course.type}</td>
                <td>
                  <button className="btn btn-primary">Request</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default GradeCard;
