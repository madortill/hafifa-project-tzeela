import styles from "./PracticeLeave.module.css";

const PracticeLeave = ({ onBack, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.red}>רגע אחד!</h2>
        <h2>
          אתה בטוח שאתה רוצה 
          לצאת מהמשחק?
        </h2>
        <p>
          במידה ותצא כל ההתקדמות שלך במשחק תמחק
        </p>

        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onBack}>
            חזרה למשחק
          </button>

          <button className={styles.confirm} onClick={onConfirm}>
            יציאה
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeLeave;
