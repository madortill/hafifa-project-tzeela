import React from "react";
import styles from "./Definition.module.css";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";
import SimpleAstroid from "../../assets/img/asteroidcircle.svg";
import backBtn from "../../assets/img/back-btn.svg";

const Definition = ({ onNext, onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={backBtn} alt="back" className={styles.backButton} onClick={onBack} />
        </header>

        <main className={styles.mainContent}>
          <h1 className={styles.subjHeader}>הגדרה - <br></br>אז מהו אסטרואיד?</h1>
          <p className={styles.text}>אסטרואיד הוא יצור מרושע שמטרתו להשמיד את כדור הארץ ואנחנו בברוגז איתו, ממש. הוא נראה כמו כדור עגול כזה אבל לא חלק כי יש לו בליטות ממש מכוערות שנראות כמו חצ'קונים.</p>

          <div className={styles.visualGroup}>
            <img src={SimpleAstroid} alt="astroid" className={styles.asteroid} />
            <img src={AstronautHi} alt="Astronaut Dani" className={styles.daniHi} />
            <div className={styles.planetContainer}>
              <img src={greenPlanet} alt="green planet" className={styles.greenHalf} />
            </div>
            <div className={styles.footer}>
              <p className={styles.miniText}>חושב שהבנת?</p>
              <button className={styles.nextButton} onClick={onNext}>כך אותי לחידון קצר!</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Definition;