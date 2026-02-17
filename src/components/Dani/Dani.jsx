import Astronaut from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import "./Dani.css";
import Header from "../Header/Header";

const Dani = () => {
    const navigate = useNavigate();

    return (
        <div className="opening-page-Dani">
            <Header />
            <button className="back-button" onClick={() => navigate("/")}>
                חזור
            </button>
            <img src={Astronaut} alt="Dani the astronaut" className="Dani" />
            <p className="opening-text fade-in">
                היי לכולם!
                אני דני - נציג חלל ותיק.
                קרה משהו נורא - כדור הארץ תחת מתקפת האסטרואידים הגרועה ביותר שהיא אי פעם חוותה!
                דווקא ברגעים קשים אלו התחילה דליפה ממחסני הגז של החללית.
                הזמן מוגבל והסכנה גבוהה, והחיים של כדור הארץ כולו תלוי בכם.
                אנחנו קצרים בכוח אדם וממש צריכים אתכם.
                תוכלו לעזור לי לנטרל את איומי האסטרואידים?
            </p>
            <button className="button next-button" onClick={() => navigate("/home")}>
                בטח, אני מוכן להתחיל!
            </button>
        </div>
    );
};

export default Dani;
