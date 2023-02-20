import CardIssue from "../Components/CardIssue";

const cardchange = [
  {
    code:'Fatima Jamal',
    cname:'19k-1107',
    type:'0316-8716232'
  },
  
]

const CourseIssueRequest = () => {
  return (
    <div className="cardchange">
      <div className="container">
        <h1>Card Issue Request</h1>
        <CardIssue data={cardchange} />
      </div>
    </div>
  );
};

export default CourseIssueRequest;
