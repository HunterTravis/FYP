import FeeCard from "../Components/FeeCard/FeeCard";

const FeeDetails = () => {
  const feeDetails = [
    {
      semesterNo: "One",
      semesterTitle: "Fall 2022",
      arrears: 500,
      dueInSemester: {
        tutionFee: 1000,
        studentActivitesFund: 200,
        withholdingTax: 0,
      },
      discount: 200,
      netAmount: 1350,
      collection: 1000,
      balance: 350,
    },
    {
      semesterNo: "Two",
      semesterTitle: "Spring 2022",
      arrears: 0,
      dueInSemester: {
        tutionFee: 1200,
        studentActivitesFund: 200,
        withholdingTax: 60,
      },
      discount: 100,
      netAmount: 1480,
      collection: 1200,
      balance: 280,
    },
    {
      semesterNo: "Three",
      semesterTitle: "Fall 2021",
      arrears: 0,
      dueInSemester: {
        tutionFee: 2200,
        studentActivitesFund: 200,
        withholdingTax: 0,
      },
      discount: 100,
      netAmount: 1480,
      collection: 1200,
      balance: 280,
    },
    {
      semesterNo: "Four",
      semesterTitle: "Spring 2021",
      arrears: 0,
      dueInSemester: {
        tutionFee: 1300,
        studentActivitesFund: 200,
        withholdingTax: 60,
      },
      discount: 100,
      netAmount: 1480,
      collection: 1200,
      balance: 280,
    },
  ];

  return (
    <div className="fee-details">
      <div className="container">
        <h1>Fee Details</h1>
        <FeeCard data={feeDetails} />
      </div>
    </div>
  );
};

export default FeeDetails;
