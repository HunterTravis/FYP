// import TentativeStudyPlan from "../Pages/TentativeStudyPlan";

const TentativePlan = ({data}) => {
  const courses = data;

  return (
    <div className="withdraw-card">
      <div className="withdraw-card__header d-flex">
        <h5>Semester 1 - Fall 2021</h5>
      </div>
      <div className="withdraw-card__body">
        <table>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Type</th>
            <th>Credit Hrs.</th>
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.code}</td>
                <td>{course.cname}</td>
                <td>{course.type}</td>
                <td>{course.chours}</td>
                <td>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TentativePlan;
