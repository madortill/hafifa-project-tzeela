import "./Roadmap.css";
import pinkPlanet from "../../assets/img/planets/pink-planet.svg";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import purplePlanet from "../../assets/img/planets/purple-planet.svg";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";

const Roadmap = ({ onSelectPlanet }) => {
  return (
    <div id="planets">
      <div className="planet pink" onClick={() => onSelectPlanet("pink")}>
        <img src={pinkPlanet} alt="pink planet" />
        <p>מבוא</p>
      </div>

      <div className="planet green" onClick={() => onSelectPlanet("green")}>
        <img src={greenPlanet} alt="green planet" />
        <p>הגדרה</p>
      </div>

      <div className="planet purple" onClick={() => onSelectPlanet("purple")}>
        <img src={purplePlanet} alt="purple planet" />
        <p>סוגי אסטרואידים</p>
      </div>

      <div className="planet blue" onClick={() => onSelectPlanet("blue")}>
        <img src={bluePlanet} alt="blue planet" />
        <p>פיצוץ אסטרואידים</p>
      </div>
    </div>
  );
};

export default Roadmap;
