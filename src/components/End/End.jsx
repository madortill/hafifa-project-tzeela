import styles from "./End.module.css";
import { useNavigate } from "react-router-dom";
import DaniEnd from "../../assets/img/astronaut.svg";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";

const End = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.endContainer}>
            <h1 className={styles.subjHeader}>כל הכבוד, סיימת את לומדת מלחמת אסטרואידים! בזכותך כדור הארץ ניצל</h1>
            <img src={DaniEnd} alt="dani end page" className={styles.daniEnd} />
            <p className={styles.endMiniText}>החומר לא יושב לכם עד הסוף?</p>
            <button className={styles.nextButton} onClick={() => navigate("/")}>מעבר על הלומדה פעם נוספת</button>
            <img src={bluePlanet} alt="blue planet" className={`${styles.halfPlanet} half-planet`} />
        </div>
    );
};

export default End;