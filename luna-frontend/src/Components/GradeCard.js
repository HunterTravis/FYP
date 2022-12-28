const GradeCard = (props) => {
  return (
    <div className="challan-card">
      <div className="challan-card_header">
        <h3>Grade Change Request</h3>
      </div>
        <div className="challan-card_body">
        <table>
                  <tr>
                      <th>Code</th>
                      <th>Course Name</th>
                      <th>Type</th>
                  </tr>
                  <tr>
                      <td>{props.data.code}</td>
                      <td>{props.data.cname}</td>
                      <td>{props.data.type}</td>
                      <td><button className="btn btn-primary">Request</button></td>
                  </tr>
              </table>
          </div>
      </div>
    );
};

export default GradeCard;