import WithdrawCard from "../Components/WithdrawCard";

const RegisteredCourses = [
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
        <WithdrawCard data={RegisteredCourses} />
      </div>
    </div>
  );
};

export default CourseWithdraw;
