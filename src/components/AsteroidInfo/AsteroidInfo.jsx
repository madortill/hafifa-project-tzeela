import { useState } from "react";
import "./AsteroidInfo.css";
import asteroidsData from "../../data/asteroidsData.json";
import purplePlanet from "../../assets/img/planets/purple-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import SimpleAstroid from "../../assets/img/asteroidcircle.svg";
import AsteroidId from "../AsteroidId/AsteroidId";

const AsteroidInfo = ({ onBack }) => {
  const [selectedAsteroid, setSelectedAsteroid] = useState(null);
  const [visited, setVisited] = useState([]);

  const handleSelect = (id) => {
    if (!visited.includes(id)) setVisited(prev => [...prev, id]);
    const asteroid = asteroidsData.find(a => a.id === id);
    setSelectedAsteroid(asteroid);
  };

  const handleReturn = () => setSelectedAsteroid(null);

  const allVisited = visited.length === asteroidsData.length;

  if (selectedAsteroid) {
    return <AsteroidId asteroid={selectedAsteroid} onBack={handleReturn} onFinish={allVisited ? onBack : null} />;
  }

  return (
    <div className="asteroid-info-intro">
      <button className="back-button" onClick={onBack}>חזור</button>

      <h1 className="subj-header">סוגי אסטרואידים - מול מי אנחנו נלחמים?</h1>

      <p className="text">לחצו על כל אסטרואיד כדי ללמוד עליו.</p>

      <div className="astroids">
        {asteroidsData.map(asteroid => (
          <div key={asteroid.id} className={`astroid ${!visited.includes(asteroid.id) ? "glow" : ""}`} onClick={() => handleSelect(asteroid.id)}>
            <img src={SimpleAstroid} alt={asteroid.title} />
            <p>{asteroid.title}</p>
          </div>
        ))}
      </div>

      {allVisited && <button className="button next-button" onClick={onBack}>חזרה לחללית</button>}

      <img src={AstronautHi} alt="Astronaut Dani saying hi" id="dani-definition-right" />
      <img src={purplePlanet} alt="purple planet" id="purple-half" className="half-planet" />
    </div>
  );
};

export default AsteroidInfo;
