import "./AsteroidPractice.css";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import GameIntro from "../../assets/img/game-intro.svg";

const AsteroidPractice = ({ onBack, onNext }) => {
  return (
    <div className="asteroid-practice-intro">
      <button className="back-button" onClick={onBack}>חזור</button>
      <h1 className="subj-header">פיצוץ אסטרואידים - מה תפקידנו בעצם?</h1>
      <p className="text">
        תחנת השיגור היא האחראית לחישוב קואורדינטות שבהן האסטרואיד נמצא בכל רגע נתון. 
        תפקידכם הוא לכוון את משגר הפצצות לכיוון האסטרואיד לפי הקורדינאטות שקיבלתם.
      </p>
      <img src={GameIntro} alt="game intro" id="game-intro-img" />
      <img src={AstronautHi} alt="Astronaut Dani" id="dani-definition-right" />
      <p className="mini-text">חושב שהבנת?</p>
      <button className="button next-button left" onClick={onNext}>
        קח אותי לתרגול!
      </button>
      <img src={bluePlanet} alt="blue planet" id="blue-half" className="half-planet" />
    </div>
  );
};

export default AsteroidPractice;