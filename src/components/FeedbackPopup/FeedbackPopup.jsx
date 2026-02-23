import styles from "./FeedbackPopup.module.css";
import DaniHead from "../../assets/img/dani-head.svg";

const POPUP_CONFIG = {
    correct: {
        message: "כל הכבוד, רואים שאתה טיל בחומר!",
        className: styles.correct,
        showIcon: "dani"
    },
    wrong: {
        message: "קצת פספסת...",
        className: styles.wrong,
        showIcon: "dani"
    },
    timeout: {
        message: "מלאי החמצן שלכם אזל, אולי תצליחו פעם הבאה...",
        className: styles.timeout,
        showIcon: "dani"
    }
};

const FeedbackPopups = ({ type, onClose, onRetry, onBackToGrid }) => {

    const config = POPUP_CONFIG[type];

    if (!config) return null;

    return (
        <div className={`${styles.fullOverlay} ${config.className}`}>

            <div className={styles.content}>

                <h1 className={styles.msg}>
                    {config.message}
                </h1>

                {config.showIcon === "dani" && (
                    <img src={DaniHead} className={styles.icon} alt="feedback" />
                )}

                <div className={styles.btnArea}>

                    {type === "correct" && (
                        <button onClick={onClose} className={styles.navBtn}>
                            לעמוד הבא
                        </button>
                    )}

                    {type === "wrong" && (
                        <button onClick={onRetry} className={styles.navBtn}>
                            לנסות שוב
                        </button>
                    )}

                    {type === "timeout" && (
                        <button onClick={onBackToGrid} className={styles.navBtn}>
                            חזרה לחללית
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FeedbackPopups;