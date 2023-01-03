import TranscriptCard from "../Components/TranscriptCard";

const transcript = [
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

const Transcript = () => {
  return (
    <div className="transcript">
      <div className="container">
        <h1>Transcript</h1>
        <TranscriptCard data={transcript} />
      </div>
    </div>
  );
};

export default Transcript;
