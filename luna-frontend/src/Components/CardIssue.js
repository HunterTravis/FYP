const CardIssue = ({data}) => {
  const courses = data;

  return (
    <div className="withdraw-card">
      <div className="withdraw-card__header d-flex">
        <h5>Card Issue Request</h5>
      </div>
      <div className="withdraw-card__body">
        <table>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Phone Number</th>
            <th>Status</th>
          
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.code}</td>
                <td>{course.cname}</td>
                <td>{course.type}</td>
                <td>
                  <button className="btn btn-primary">Issue Request</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CardIssue;
