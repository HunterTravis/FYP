const CourseRegistrationCard = ({ data }) => {
  const courses = data;

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
                <td>{course.code}</td>
                <td>{course.cname}</td>
                <td>{course.type}</td>
                <td>{course.chours}</td>
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