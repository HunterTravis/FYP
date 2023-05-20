import TranscriptCard from "../Components/TranscriptCard";

const transcriptData = [
  {
    semesterNo: 1,
    semesterName: "Fall 2021",
    courses: [
      {
        code: "CS302",
        cname: "Information Security",
        chours: "3",
        type: "Core",
        point: 4.0,
        grade: "A",
      },
      {
        code: "CS402",
        cname: "Professional Practices in IT",
        chours: "3",
        type: "Core",
        point: 4.0,
        grade: "A",
      },
      {
        code: "CS502",
        cname: "Design Defects and Restructuring",
        chours: "3",
        type: "Elective",
        point: 4.0,
        grade: "A",
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
        point: 4.0,
        grade: "A",
      },
      {
        code: "CS403",
        cname: "Software Testing",
        chours: "3",
        type: "Core",
        point: 4.0,
        grade: "A",
      },
      {
        code: "CS503",
        cname: "Software Architecture",
        chours: "3",
        type: "Elective",
        point: 4.0,
        grade: "A",
      },
    ],
  },
  // {
  //   semesterNo: 3,
  //   semesterName: "Fall 2022",
  //   courses: [
  //     {
  //       code: "CS304",
  //       cname: "Software Project Management",
  //       chours: "3",
  //       type: "Core",
  //       point: 4.0,
  //       grade: "A",
  //     },
  //     {
  //       code: "CS404",
  //       cname: "Software Quality Assurance",
  //       chours: "3",
  //       type: "Core",
  //       point: 4.0,
  //       grade: "A",
  //     },
  //     {
  //       code: "CS504",
  //       cname: "Software Reuse",
  //       chours: "3",
  //       type: "Elective",
  //       point: 4.0,
  //       grade: "A",
  //     },
  //   ],
  // },
];

const Transcript = () => {
  return (
    <div className="plan">
      <div className="container">
        <h1>Transcript</h1>
        <TranscriptCard data={transcriptData} />
      </div>
    </div>
  );
};

export default Transcript;
