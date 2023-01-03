const ChallanCard = (props) => {
  return (
    <div className="challan-card">
      <div className="challan-card__header d-flex">
        <h5>Student Challan</h5>
      </div>
      <div className="challan-card__body">
        <table>
          <tr className="ChallanTable">
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
            <td>
              <button className="btn btn-primary">Print</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ChallanCard;
