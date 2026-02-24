import React from "react";
import styles from "./Roadmap.module.css";
import pinkPlanet from "../../assets/img/planets/pink-planet.svg";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import purplePlanet from "../../assets/img/planets/purple-planet.svg";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";

const Roadmap = ({ onSelectPlanet }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.mapArea}>

          <div className={`${styles.planet} ${styles.pink}`} onClick={() => onSelectPlanet("pink")}>
            <img src={pinkPlanet} alt="pink" />
            <p>מבוא</p>
          </div>

          <div className={`${styles.planet} ${styles.green}`} onClick={() => onSelectPlanet("green")}>
            <img src={greenPlanet} alt="green" />
            <p>הגדרה</p>
          </div>

          <div className={`${styles.planet} ${styles.purple}`} onClick={() => onSelectPlanet("purple")}>
            <img src={purplePlanet} alt="purple" />
            <p>סוגי אסטרואידים</p>
          </div>

          <div className={`${styles.planet} ${styles.blue}`} onClick={() => onSelectPlanet("blue")}>
            <img src={bluePlanet} alt="blue" />
            <p>פיצוץ אסטרואידים</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Roadmap;