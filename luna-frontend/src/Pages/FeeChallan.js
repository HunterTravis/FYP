import ChallanCard from "../Components/ChallanCard";

const challanData = {
  sno: "1",
  amount: "50000",
  generatedOn: "17-Aug-2022",
  dueDate: "20-Oct-2022",
  paymentStatus: "Paid",
};

const FeeChallan = () => {
  return (
    <div className="fee-challan">
      <div className="container">
        <h1>Fee Challan</h1>
        <ChallanCard data={challanData} />
      </div>
    </div>
  );
};

export default FeeChallan;