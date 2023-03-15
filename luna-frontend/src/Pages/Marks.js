import MarksCard from "../Components/MarksCard";
import { useState } from "react";

const Marks = () => {
  const [arr, setArr] = useState([1, 0, 0]);
  const onClick = (e) => {
    setArr(e === 1 ? 0 : e === 2 ? 1 : 2);
  };

  return (
    <div className="marks">
      <div className="container">
        <h1>Marks</h1>
        <div className="sem-selector text-center">
          <label htmlFor="fall-22">
            <input
              type="radio"
              id="fall-22"
              name="sem"
              value="fall22"
              defaultChecked
            />
            Fall 2022
          </label>
          <label htmlFor="summer-22">
            <input type="radio" id="summer-22" name="sem" value="summer22" />
            Summer 2022
          </label>
          <label htmlFor="spring-22">
            <input type="radio" id="spring-22" name="sem" value="spring22" />
            Spring 2022
          </label>
        </div>
        <div className="marks-card-display">
          <MarksCard />
        </div>
      </div>
    </div>
  );
};

export default Marks;
