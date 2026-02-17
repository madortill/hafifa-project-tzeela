import "./DefinitionScore.css";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";

const TOTAL_QUESTIONS = 5;

const DefinitionScore = ({ failCount, onFinish }) => {
  const percentScore = Math.round((TOTAL_QUESTIONS / (TOTAL_QUESTIONS + failCount)) * 100);

  return (
    <div className="definition-score-end">
      <h1 className="subj-header">הגדרה - אז מהו אסטרואיד?</h1>
      <div id="bg-div-score">
        <p className="text" id="top">כל הכבוד!</p>
        <div id="circle-div">
          <p id="number">{percentScore}</p>
        </div>
        <p className="text" id="bottom">
          עברת את החידון עם <span>{failCount}</span> טעויות!!!
        </p>
      </div>
      <img src={AstronautHi} alt="Astronaut Dani" id="dani-definition-right" />
      <button className="button next-button left" onClick={onFinish} id="next-score">
        חזרה לחללית
      </button>
      <img src={greenPlanet} alt="green planet" id="green-half" className="half-planet" />
    </div>
  );
};

export default DefinitionScore;