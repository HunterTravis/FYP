const AttendanceCard = ({data}) => {
    const courses = data;
  
    return (
      <div className="attenadnce-card">
        <div className="withdraw-card__header d-flex">
          <h5>Attendance</h5>
        </div>
        <div className="withdraw-card__body">
          <table>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Credit Hrs.</th>
              <th>Percentage</th>
              <th>Review</th>
            </tr>
            {courses.map((course) => {
              return (
                <tr>
                  <td>{course.code}</td>
                  <td>{course.cname}</td>
                  <td>{course.chours}</td>
                  <td>{course.perecntage}</td>

                  <td>
                    <button className="btn btn-primary">Request for Modification</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  };
  
  export default AttendanceCard;
  