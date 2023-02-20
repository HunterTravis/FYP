import GradeCard from "../Components/GradeCard";

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

const GradeChangeRequest = () => {
  return (
    <div className="grade-change">
      <div className="container">
        <h1>Grade Change Request</h1>
        <GradeCard data={registeredCourses} />
      </div>
    </div>
  );
};

export default GradeChangeRequest;
