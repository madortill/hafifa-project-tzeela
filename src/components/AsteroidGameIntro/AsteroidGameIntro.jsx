
import "./AsteroidGameIntro.css";
import bluePlanet from "../../assets/img/planets/blue-planet.svg";
import AstronautHi from "../../assets/img/astronaut-saying-hi.svg";

const AsteroidGameIntro = ({ onNext, onBack }) => {
    return (
        <div className="game-intro">
            <button className="back-button" onClick={onBack}>
                חזור
            </button>

            <h1 className="subj-header">
                פיצוץ אסטרואידים -
                תרגול
            </h1>

            <div id="bg-div">
                <h2 id="small-header">הגעתם לחלק האחרון של הלומדה!</h2>
                <p className="text">
                    אבל רגע, עדיין אי אפשר להתרגש - דליפת הגז הגיעה למצב קריטי שבו לא נוכל להשאר בחלל ליותר מדקה מבלי לחזור לתחנת החלל לחידוש החמצן.
                    תצטרכו לקבל את המידע מתחנת החלל, לכוון את משגר הפצצות על האסטרואיד מתחנת השיגור החללית ובמידה ופגעת גם לענות על שאלה לפני שמלאי החמצן שלכם יגמר...
                </p>
                <p id="ready-text">מוכנים?</p>
                <button className="button" onClick={onNext}>
                    התחל
                </button>
            </div>

            <img src={AstronautHi} alt="Astronaut Dani saying hi" id="dani-definition-right" />
            <p className="mini-text-quiz">עדיין לא מוכן?</p>
            <button className="button go-back-button" onClick={onBack}>
                לעמוד הקודם
            </button>
            <img src={bluePlanet} alt="blue planet" id="blue-half" className="half-planet" />
        </div>
    );
};

export default AsteroidGameIntro;