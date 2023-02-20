const FeeCard = ({ data }) => {
  const fees = data;

  return (
    <div className="fee-card">
      <div className="container my-3">
        <div class="accordion w-50" id="accordionExample">
          {fees.map((fee) => {
            return (
              <div class="accordion-item">
                <h5 class="accordion-header" id={"heading" + fee.semesterNo}>
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + fee.semesterNo}
                    aria-expanded="false"
                    aria-controls={"collapse" + fee.semesterNo}
                  >
                    {fee.semesterTitle}
                  </button>
                </h5>
                <div
                  id={"collapse" + fee.semesterNo}
                  class="accordion-collapse collapse"
                  aria-labelledby={"heading" + fee.semesterNo}
                >
                  <div class="accordion-body">
                    <p>
                      Arrears: <b>{fee.arrears}</b>
                    </p>
                    <p>Due in semester:</p>
                    <ul>
                      <li>
                        Tution Fee: <b>{fee.dueInSemester.tutionFee}</b>
                      </li>
                      <li>
                        Student Activites Fund:{" "}
                        <b>{fee.dueInSemester.studentActivitesFund}</b>
                      </li>
                      <li>
                        Withholding Tax: <b>{fee.dueInSemester.withholdingTax}</b>
                      </li>
                    </ul>
                    <p>
                      Discount: <b>{fee.discount}</b>
                    </p>
                    <p>
                      Net Amount: <b>{fee.netAmount}</b>
                    </p>
                    <p>
                      Collection: <b>{fee.collection}</b>
                    </p>
                    <p>
                      Balance: <b>{fee.balance}</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
