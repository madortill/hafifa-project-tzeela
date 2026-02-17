import "./Learn.css";
import pinkPlanet from "../../assets/img/planets/pink-planet.svg";
import Astronaut from "../../assets/img/astronaut.svg";

const Learn = ({ onBack }) => {
    return (
        <div className="learn-intro">
            <button className="back-button" onClick={onBack}>
                חזור
            </button>
            <h1 className="subj-header">מבוא -
                למה זה חשוב?</h1>
            <p className="text">
                שיעור פיצוץ אסטרואיד ידוע בחשיבותו בגלל הסכנה היומיומית הנשקפת לכדור הארץ בלעדיו.
                עשרות אלפי אסטרואידים נעים לכיוון הכוכב שלנו, ועליכן לדעת כיצד למנוע מהם להגיע אליו.
            </p>
            <img src={Astronaut} alt="Astronaut Dani" id="dani-learn"/>
            <button className="button next-button" onClick={onBack}>
                הבנתי!
            </button>
            <img src={pinkPlanet} alt="pink planet" id="pink-half"/>
        </div>
    );
};

export default Learn;
