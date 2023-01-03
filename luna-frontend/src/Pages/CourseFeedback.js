import FeedbackCard from "../Components/FeedbackCard";

const feedback = [
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

const CourseFeedback = () => {
  return (
    <div className="withdraw">
      <div className="container">
        <h1>Course Feedback</h1>
        <FeedbackCard data={feedback} />
      </div>
    </div>
  );
};

export default CourseFeedback;
