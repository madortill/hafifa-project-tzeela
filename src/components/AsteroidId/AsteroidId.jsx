import "./AsteroidId.css";
import purplePlanet from "../../assets/img/planets/purple-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";

const AsteroidId = ({ asteroid, onBack, onFinish }) => {
  return (
    <div className="asteroid-id">
      <button className="back-button" onClick={onBack}>חזור</button>

      <h1 className="subj-header">סוגי אסטרואידים - מול מי אנחנו נלחמים?</h1>

      <div className="id-div">
        <h2 id="header-id">{asteroid.title}</h2>
        <p className="text" id="text-id">{asteroid.text}</p>
        <img src={asteroid.image} alt={asteroid.image} id="grown-astroid" />
      </div>

      {onFinish && <button className="button next-button left" onClick={onFinish}>חזרה לחללית</button>}

      <img src={AstronautHi} alt="Astronaut Dani saying hi" id="dani-definition-right" />
      <img src={purplePlanet} alt="purple planet" id="purple-half" className="half-planet" />
    </div>
  );
};

export default AsteroidId;
