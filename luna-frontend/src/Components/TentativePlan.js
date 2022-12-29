const TentativePlan = (props) => {
    return (
      <div className="plan">
        <div className="challan-card_header">
          <h3>Semester Information</h3>
        </div>
          <div className="challan-card_body">
              <table>
                  <tr>
                      <th>Code</th>
                      <th>Course Name</th>
                      <th>Credit Hours</th>
                      <th>Type</th>
                  </tr>
                  <tr>
                      <td>{props.data.code}</td>
                      <td>{props.data.cname}</td>
                      <td>{props.data.chours}</td>
                      <td>{props.data.type}</td>
                  </tr>
              </table>
          </div>
      </div>
    );
  };
  
  export default TentativePlan;

  