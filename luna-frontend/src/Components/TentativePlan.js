// import TentativeStudyPlan from "../Pages/TentativeStudyPlan";

const TentativePlan = ({ data }) => {
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
                </tr>
                {planItem.courses.map((course) => {
                  return (
                    <tr>
                      <td>{course.code}</td>
                      <td>{course.cname}</td>
                      <td>{course.type}</td>
                      <td>{course.chours}</td>
                      <td></td>
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

export default TentativePlan;
