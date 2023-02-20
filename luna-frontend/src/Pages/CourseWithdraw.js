import WithdrawCard from "../Components/WithdrawCard";

const registeredCourses = [
  {
    code:'CS302',
    cname:'Information Security',
    chours:'3',
    type:'Core'
  },
  {
    code:'CS402',
    cname:'Professional Practices in IT',
    chours:'3',
    type:'Core'
  },
  {
    code:'CS502',
    cname:'Design Defects and Restructuring',
    chours:'3',
    type:'Elective'
  }
]

const CourseWithdraw = () => {
  return (
    <div className="withdraw">
      <div className="container">
        <h1>Course Withdrawal</h1>
        <WithdrawCard data={registeredCourses} />
      </div>
    </div>
  );
};

export default CourseWithdraw;
