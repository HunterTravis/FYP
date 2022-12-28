import GradeCard from "../Components/GradeCard";

const grdaeChange = [
  {
    code: "CL117",
    cname: "Applied Physics",
    chours: "1",
    type: "core",
  },
];

const GradeChangeRequest = () => {
  return (
    <div className="grade-change">
      <div className="container">
        <GradeCard data={grdaeChange[0]} />
      </div>
    </div>
  );
};

export default GradeChangeRequest;
