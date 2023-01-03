import TentativePlan from "../Components/TentativePlan";

const plan = [
  {
    semesterNo: 1,
    semesterName: "Fall 2021",
    courses: [
      {
        code: "CS302",
        cname: "Information Security",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS402",
        cname: "Professional Practices in IT",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS502",
        cname: "Design Defects and Restructuring",
        chours: "3",
        type: "Elective",
      },
    ],
  },
  {
    semesterNo: 2,
    semesterName: "Spring 2022",
    courses: [
      {
        code: "CS303",
        cname: "Software Engineering",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS403",
        cname: "Software Testing",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS503",
        cname: "Software Architecture",
        chours: "3",
        type: "Elective",
      },
    ],
  },
  {
    semesterNo: 3,
    semesterName: "Fall 2022",
    courses: [
      {
        code: "CS304",
        cname: "Software Project Management",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS404",
        cname: "Software Quality Assurance",
        chours: "3",
        type: "Core",
      },
      {
        code: "CS504",
        cname: "Software Reuse",
        chours: "3",
        type: "Elective",
      },
    ],
  },
];

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
