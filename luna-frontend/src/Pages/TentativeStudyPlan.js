import TentativePlan from "../Components/TentativePlan";

const planData = [
  {
    code:'CL117',
    cname:'Applied Physics',
    chours:'1',
    type:'core'
  },
  {
    code:'CL117',
    cname:'Applied Physics',
    chours:'1',
    type:'core'
  },
  {
    code:'CL117',
    cname:'Applied Physics',
    chours:'1',
    type:'core'
  }
]

const TentativeStudyPlan = () => {
  return (
    <div className="plan">
      <div className="container">
        <h1>Tentative Study Plan</h1>
        <TentativePlan data={planData[0]} />
        <TentativePlan data={planData[1]} />
        <TentativePlan data={planData[2]} />
      </div>
    </div>
  );
};

export default TentativeStudyPlan;
