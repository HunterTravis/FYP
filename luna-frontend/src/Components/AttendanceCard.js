// import Transcript from "../Pages/Transcript";

const AttendanceCard = ({ data }) => {
  const plan = data;

  return (
    <div className="withdraw-card">
      {plan.map((planItem) => {
        return (
          <>
            <div className="withdraw-card__header d-flex">
              <h5>
                Semester {planItem.semesterNo} - {planItem.semesterName}
              </h5>
            </div>
            <div className="withdraw-card__body">
              <table>
                <tr>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Type</th>
                  <th>Credit Hrs.</th>
                  <th>Review</th>
                  <th>Percentage</th>
                </tr>
                {planItem.courses.map((course) => {
                  return (
                    <tr>
                      <td>{course.code}</td>
                      <td>{course.cname}</td>
                      <td>{course.type}</td>
                      <td>{course.chours}</td>
                      <td>
                        <button className="btn btn-primary">Request for Modification</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AttendanceCard;





