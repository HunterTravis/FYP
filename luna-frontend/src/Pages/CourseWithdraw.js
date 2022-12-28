import WithdrawCard from "../Components/WithdrawCard";
import Sidebar from "../Components/Sidebar";


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
    <div className="withdraw d-flex">
      <Sidebar />
      <div className="container">
        <WithdrawCard data={WithdrawData[0]} />
      </div>
    </div>
  );
};

export default CourseWithdraw;
