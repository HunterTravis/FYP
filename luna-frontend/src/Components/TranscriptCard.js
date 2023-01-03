const TranscriptCard = ({data}) => {
    const courses = data;
  
    return (
      <div className="withdraw-card">
        <div className="withdraw-card__header d-flex">
          <h5>First Semester</h5>
        </div>
        <div className="withdraw-card__body">
          <table>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Type</th>
              <th>Section</th>
              <th>Credit Hrs.</th>
              <th>Grade</th>
              <th>Points</th>
              <th>Remarks</th>
            </tr>
            {courses.map((course) => {
              return (
                <tr>
                  <td>{course.code}</td>
                  <td>{course.cname}</td>
                  <td>{course.type}</td>
                  <td>{course.chours}</td>
                </tr>
              );
            })}
          </table>
          <table>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Type</th>
              <th>Section</th>
              <th>Credit Hrs.</th>
              <th>Grade</th>
              <th>Points</th>
              <th>Remarks</th>
            </tr>
            {courses.map((course) => {
              return (
                <tr>
                  <td>{course.code}</td>
                  <td>{course.cname}</td>
                  <td>{course.type}</td>
                  <td>{course.chours}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  };
  
  export default TranscriptCard;
  