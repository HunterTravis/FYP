import WithdrawCard from "../Components/WithdrawCard";

const WithdrawData = [
  {
    code:'CL117',
    cname:'Applied Physics',
    chours:'1',
    type:'core'
  },

]

const CourseWithdraw = () => {
  return (
    <div className="withdraw">
      <div className="container">
        <WithdrawCard data={WithdrawData[0]} />
      </div>
    </div>
  );
};

export default CourseWithdraw;
