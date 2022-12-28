const WithdrawCard = (props) => {
    return (
      <div className="withdraw">
        <div className="withdraw_header">
          <h3>Course Withdrawl</h3>
        </div>
          <div className="withdraw_body">
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
                        <td><button className="btn btn-primary">Withdraw Request</button></td>
                    </tr>
                </table>
            </div>
        </div>
      );
  };
  
  export default WithdrawCard;