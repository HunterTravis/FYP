import AttendanceCard from "../Components/AttendanceCard";

const attendance = [
  {
    code:'CS302',
    cname:'Information Security',
    chours:'3',
    type:'Core',
    percentage:'80%'
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
    <div className="attendance">
      <div className="container">
        <h1>Attendance</h1>
        <AttendanceCard data={attendance} />
      </div>
    </div>
  );
};

export default CourseWithdraw;
