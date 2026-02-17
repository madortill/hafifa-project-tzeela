import "./Definition.css";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import SimpleAstroid from "../../assets/img/asteroidcircle.svg";

const Definition = ({ onNext, onBack }) => {
  return (
    <div className="definition-intro">
      <button className="back-button" onClick={onBack}>
        חזור
      </button>
      <h1 className="subj-header">הגדרה -
      אז מהו אסטרואיד?</h1>
      <p className="text">
        אסטרואיד הוא יצור מרושע שמטרתו להשמיד את כדור הארץ ואנחנו בברוגז איתו, ממש. הוא נראה כמו כדור עגול כזה אבל לא חלק כי יש לו בליטות ממש מכוערות שנראות כמו חצ'קונים.
      </p>
      <img src={SimpleAstroid} alt="astroid" id="astroid-definition"/>
      <img src={AstronautHi} alt="Astronaut Dani saying hi" id="dani-definition-right"/>
      <p className="mini-text">חושב שהבנת?</p>
      <button className="button next-button left" onClick={onNext}>
      כך אותי לחידון קצר!
      </button>
      <img src={greenPlanet} alt="green planet" id="green-half" className="half-planet"/>
    </div>
  );
};

export default Definition;
