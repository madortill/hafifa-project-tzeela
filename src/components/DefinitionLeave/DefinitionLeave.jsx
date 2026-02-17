import styles from "./DefinitionLeave.module.css";

const DefinitionLeave = ({ onBack, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.red}>רגע אחד!</h2>
        <h2>אתה בטוח שאתה רוצה 
        לצאת מהחידון?</h2>
        <p>במידה ותצא כל ההתקדמות שלך בחידון תמחק</p>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onBack}>חזרה לחידון</button>
          <button className={styles.confirm} onClick={onConfirm}>יציאה</button>
        </div>
      </div>
    </div>
  );
};

export default DefinitionLeave;
