import { useState, useEffect } from "react";
import "./AsteroidGame.css";
import gameData from "../../data/gameData.json";
import { useNavigate } from "react-router-dom";
import PracticeLeave from "../PracticeLeave/PracticeLeave";
import Grid from "../../assets/img/grid.svg";
import SpaceshipBase from "../../assets/img/spaceship-bubble.svg";
import DaniHead from "../../assets/img/dani-head.svg";

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const AsteroidGame = ({ onFinish, onBack }) => {
    const navigate = useNavigate();
    const [asteroids] = useState(() => shuffle(gameData));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [popup, setPopup] = useState(null);
    const [showLeavePopup, setShowLeavePopup] = useState(false);

    const currentAsteroid = asteroids[currentIndex];

    // TIMER
    useEffect(() => {
        if (!zoomed || popup) return;

        if (timeLeft === 0) {
            setPopup("timeout");
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [zoomed, timeLeft, popup]);

    const handleSelect = (asteroid) => {
        if (asteroid.id === currentAsteroid.id) {
            setZoomed(true);
        }
    };

    const handleAnswer = (answer) => {
        if (answer === currentAsteroid.correct) {
            setPopup("correct");
        } else {
            setPopup("wrong");
        }
    };

    const closePopup = () => {
        setPopup(null);
        setZoomed(false);
        setTimeLeft(30);

        if (currentIndex < asteroids.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            navigate("/end");
        }
    };

    if (!currentAsteroid) return null;

    return (
        <div className="game-wrapper">

            <button className="back-button" onClick={() => setShowLeavePopup(true)}>
                חזור
            </button>

            <h1 className="subj-header">פיצוץ אסטרואידים -
                תרגול
            </h1>

            <div className="game-bg-div">
                <p id="instructions">
                    לחצו על הטיל עם הקאורדינאטות שנשלחו אליכם מתחנת החלל למטה
                </p>

                <img src={Grid} alt="grid" id="grid" />

                <div id="spaceship-base">
                    <img src={SpaceshipBase} alt="spaceship" id="spaceship-base-img" />
                    <h2 id="small-header">
                        <span id="x">{currentAsteroid.x}</span>,
                        <span id="y">{currentAsteroid.y}</span>
                    </h2>
                </div>

                <div>
                    <img src={DaniHead} alt="dani logo" id="dani-logo-talk" />
                    <p id="message">אני סומך עליכם!</p>
                </div>
            </div>

            {!zoomed && (
                <div className="grid">
                    {asteroids.map(a => (
                        <div key={a.id} className="grid-asteroid" onClick={() => handleSelect(a)}>
                            ({a.x},{a.y})
                        </div>
                    ))}
                </div>
            )}

            {zoomed && (
                <div className="zoomed-asteroid">
                    <div
                        className="timer-bar"
                        style={{ width: `${(timeLeft / 30) * 100}%` }}
                    />

                    <h2>{currentAsteroid.question}</h2>

                    <button onClick={() => handleAnswer(currentAsteroid.correct)}>
                        תשובה נכונה
                    </button>

                    <button onClick={() => handleAnswer("wrong")}>
                        תשובה שגויה
                    </button>

                    <button onClick={() => handleAnswer("wrong")}>
                        תשובה שגויה
                    </button>

                    <button onClick={() => handleAnswer("wrong")}>
                        תשובה שגויה
                    </button>
                </div>
            )}

            {popup && (
                <div className="popup">
                    <p>
                        {popup === "correct" && "פגעת בול!"}
                        {popup === "wrong" && "קצת פספסת..."}
                        {popup === "timeout" && "נגמר הזמן!"}
                    </p>
                    <button onClick={closePopup}>המשך</button>
                </div>
            )}

            {showLeavePopup && (
                <PracticeLeave
                    onBack={() => setShowLeavePopup(false)}
                    onConfirm={onBack}
                />
            )}
        </div>
    );
};

export default AsteroidGame;
