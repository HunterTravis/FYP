import TentativePlan from "../Components/TentativePlan";


const plan = [
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

const TentativeStudyPlan = () => {
  return (
    <div className="plan">
      <div className="container">
        <h1>Tentative Study Plan</h1>
        <TentativePlan data={plan} />
      </div>
    </div>
  );
};

export default TentativeStudyPlan;
