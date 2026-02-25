import React from "react";
import styles from "./AsteroidPractice.module.css";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import GameIntro from "../../assets/img/game-intro.svg";
import backBtn from "../../assets/img/back-btn.svg";

const AsteroidPractice = ({ onBack, onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={backBtn} alt="back" className={styles.backButton} onClick={onBack} />
        </header>

        <main className={styles.mainContent}>
          <h1 className={styles.subjHeader}>פיצוץ אסטרואידים - <br/>מה תפקידנו בעצם?</h1>
          <p className={styles.text}>
            תחנת השיגור היא האחראית לחישוב קואורדינטות שבהן האסטרואיד נמצא בכל רגע נתון. 
            תפקידכם הוא לכוון את משגר הפצצות לכיוון האסטרואיד לפי הקורדינאטות שקיבלתם.
          </p>

          <div className={styles.visualGroup}>
            <img src={GameIntro} alt="game intro" className={styles.gameIntroImg} />
            <img src={AstronautHi} alt="Astronaut Dani" className={styles.daniHi} />
            
            <div className={styles.planetContainer}>
              <img src={bluePlanet} alt="blue planet" className={styles.blueHalf} />
            </div>

            <div className={styles.footer}>
              <p className={styles.miniText}>חושב שהבנת?</p>
              <button className={styles.nextButton} onClick={onNext}>קח אותי לתרגול!</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AsteroidPractice;