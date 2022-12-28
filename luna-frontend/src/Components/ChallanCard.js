const ChallanCard = (props) => {
  return (
    <div className="grade-change">
      <div className="grade-change_header">
        <h3>Grade Change Request</h3>
      </div>
        <div className="grade-change_body">
            <table>
                <tr>
                    <th>Challan No.</th>
                    <th>Challan Amount</th>
                    <th>Generated on</th>
                    <th>Due Date</th>
                    <th>Payment Status</th>
                    <th>Print Challan</th>
                </tr>
                <tr>
                    <td>{props.data.sno}</td>
                    <td>{props.data.amount}</td>
                    <td>{props.data.generatedOn}</td>
                    <td>{props.data.dueDate}</td>
                    <td>{props.data.paymentStatus}</td>
                    <td><button className="btn btn-primary">Print</button></td>
                </tr>
            </table>
        </div>
    </div>
  );
};

export default ChallanCard;