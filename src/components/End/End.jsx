import "./End.css";
import { useNavigate } from "react-router-dom";

const End = () => {
    const navigate = useNavigate();

    return (
        <div id="end">
            <h1>כל הכבוד, סיימת
                את לומדת
                מלחמת אסטרואידים!
                בזכותך כדור הארץ ניצל</h1>
            {/* <img /> */}

            <button className="button next-button" onClick={() => navigate("/")} >
                חזרה להתחלה
            </button>
        </div>
    );
};

export default End;