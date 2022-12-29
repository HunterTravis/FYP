import MarksCard from "../Components/MarksCard";

const Marks = () => {
  return (
    <div className="marks">
      <div className="container">
        <h1>Marks</h1>
        <div className="sem-selector text-center">
          <select name="sem" id="sem-select">
            <option value="fall-22">Fall 2022</option>
            <option value="summer-22">Summer 2022</option>
            <option value="spring-22">Spring 2022</option>
          </select>
        </div>
        <div className="marks-card-display">
          <MarksCard />
        </div>
      </div>
    </div>
  );
};

export default Marks;
