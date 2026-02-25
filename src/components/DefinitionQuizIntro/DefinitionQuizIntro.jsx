import React from "react";
import styles from "./DefinitionQuizIntro.module.css";
import greenPlanet from "../../assets/img/planets/green-planet.svg";
import Astronaut from "../../assets/img/astronaut.svg";
import backBtn from "../../assets/img/back-btn.svg";

const DefinitionQuizIntro = ({ onNext, onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={backBtn} alt="back" className={styles.backButton} onClick={onBack} />
        </header>

        <main className={styles.mainContent}>
          <h1 className={styles.subjHeader}>הגדרה - <br />אז מהו אסטרואיד?</h1>

          <div className={styles.visualGroup}>
            <div className={styles.quizCard}>
              <h2 className={styles.cardHeaderSmall}>ברוכים הבאים לחידון</h2>
              <h3 className={styles.cardHeaderLarge}>
                <span className={styles.redText}>אסטרואיד</span> או <span className={styles.greenText}>ידיד</span>
              </h3>
              <p className={styles.cardBodyText}>
                בשאלון הבא תוצגו עם תמונה של חפץ.
                תצטרכו לגרור את החפץ לצד הנכון של המסך - אסטרואידים לצד ימין וחפצים אחרים לצד שמאל.
              </p>
              <p className={styles.readyText}>מוכנים?</p>
              <button className={styles.startButton} onClick={onNext}>התחל</button>
            </div>

            <img src={Astronaut} alt="Astronaut" className={styles.dani} />

            <div className={styles.planetContainer}>
              <img src={greenPlanet} alt="green planet" className={styles.greenHalf} />
            </div>

            <div className={styles.footer}>
              <p className={styles.miniTextQuiz}>עדיין לא מוכן?</p>
              <button className={styles.nextButton} onClick={onBack}>לעמוד הקודם</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefinitionQuizIntro;