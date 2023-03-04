const CourseRegistrationCard = ({ courses }) => {
  return (
    <div className="withdraw-card">
      <div className="withdraw-card__header d-flex">
        <h5>Student Course Registration</h5>
      </div>
      <div className="withdraw-card__body">
        <table>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Type</th>
            <th>Credit Hrs.</th>
            <th></th>
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                {console.log(course)}
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.course_type}</td>
                <td>{course.credit_hours}</td>
                <td>
                  <button className="btn btn-primary">Register</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CourseRegistrationCard;