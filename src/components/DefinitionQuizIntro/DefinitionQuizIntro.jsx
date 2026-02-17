import "./DefinitionQuizIntro.css";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";

const DefinitionQuizIntro = ({ onNext, onBack }) => {
  return (
    <div className="definition-quiz-intro">
      <button className="back-button" onClick={onBack}>
        חזור
      </button>
      <h1 className="subj-header">הגדרה -
        אז מהו אסטרואיד?</h1>
      <div id="bg-div">
        <h2 id="small-header">ברוכים הבאים לחידון</h2>
        <h3 id="color-text">
          <span id="red-text">אסטרואיד</span> או <span id="green-text">ידיד</span>
        </h3>
        <p className="text">
          בשאלון הבא תוצגו עם תמונה של חפץ.
          תצטרכו לגרור את החפץ לצד הנכון של המסך - אסטרואידים לצד ימין וחפצים אחרים לצד שמאל.</p>
        <p id="ready-text">מוכנים?</p>
        <button className="button" onClick={onNext}>
          התחל
        </button>
      </div>
      <img src={AstronautHi} alt="Astronaut Dani saying hi" id="dani-definition-right" />
      <p className="mini-text-quiz">עדיין לא מוכן?</p>
      <button className="button go-back-button" onClick={onBack}>
        לעמוד הקודם
      </button>
      <img src={greenPlanet} alt="green planet" id="green-half" className="half-planet" />
    </div>
  );
};

export default DefinitionQuizIntro;
