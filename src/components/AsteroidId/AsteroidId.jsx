import React from "react";
import styles from "./AsteroidId.module.css";
import purplePlanet from "../../assets/img/planets/purple-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import backBtn from "../../assets/img/back-btn.svg";

const AsteroidId = ({ asteroid, onBack, onFinish }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={backBtn} alt="back" className={styles.backButton} onClick={onBack} />
        </header>

        <main className={styles.mainContent}>
          <h1 className={styles.subjHeader}>סוגי אסטרואידים - מול מי אנחנו נלחמים?</h1>

          <div className={styles.visualGroup}>
            <div className={styles.idCard}>
              <h2 className={styles.cardTitle}>{asteroid.title}</h2>
              <p className={styles.cardText}>{asteroid.text}</p>
              <img src={asteroid.image} alt={asteroid.title} className={styles.grownAsteroid} />
            </div>

            <img src={AstronautHi} alt="Astronaut Dani" className={styles.daniHi} />

            <div className={styles.planetContainer}>
              <img src={purplePlanet} alt="purple planet" className={styles.purpleHalf} />
            </div>

            <div className={styles.footer}>
              <button className={styles.nextButton} onClick={onBack}>
                הבנתי!
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AsteroidId;