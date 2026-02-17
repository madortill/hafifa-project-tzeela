import OpeningAnimation from "../../assets/img/loader-animation.gif";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Opening.css";

const Opening = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("openingPlayed");
    const showImmediately = sessionStorage.getItem("openingShown");

    if (showImmediately) {
      setShowContent(true);
      setAnimationPlayed(true);
    } else {
      const timer = setTimeout(() => {
        setShowContent(true);
        if (!hasPlayed) {
          setAnimationPlayed(false);
          sessionStorage.setItem("openingPlayed", "true");
        } else {
          setAnimationPlayed(true);
        }

        sessionStorage.setItem("openingShown", "true");
      }, 6500);

      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <div className="opening-page">
      <img src={OpeningAnimation} alt="loader animation" className="opening-gif" />
      {showContent && (
        <>
          <p className={`opening-text ${animationPlayed ? "" : "fade-in"}`}>
            בלומדה הבאה תעברו שיעור ביסודות פיצוץ אסטרואידים.
            הלומדה תעבור על חשיבות פיצוץ אסטרואידים, מהו בכלל אסטרואיד,
            סוגי האסטרואידים הקיימים ולבסוף גם על איך בפרקטיקה מפוצצים אסטרואיד.
            במהלך הלומדה יהיו תרגולים, ובסוף הלומדה תצאו מוכשרים ליציאה לשטח
            ופיצוץ אסטרואידים אמיתיים!
          </p>
          <button className={`button ${animationPlayed ? "" : "fade-in"}`} onClick={() => navigate("/intro")}>
            לעמוד הבא
          </button>
        </>
      )}
    </div>
  );
};

export default Opening;
