import "./End.css";
import { useNavigate } from "react-router-dom";
import DaniEnd from "../../assets/img/astronaut.svg";
import bluePlanet from "../../assets/img/planets/blue-planet.svg"

const End = () => {
    const navigate = useNavigate();

    return (
        <div id="end">
            <h1 className="subj-header">כל הכבוד, סיימת
                את לומדת
                מלחמת אסטרואידים!
                בזכותך כדור הארץ ניצל</h1>
            <img src={DaniEnd} alt="dani end page" id="dani-end" />
            <p className="end-mini-text">החומר לא יושב לכם עד הסוף?</p>
            <button className="button next-button" onClick={() => navigate("/")} >
                מעבר על הלומדה פעם נוספת
            </button>
            <img src={bluePlanet} alt="blue planet" id="blue-half" className="half-planet" />
        </div>
    );
};

export default End;