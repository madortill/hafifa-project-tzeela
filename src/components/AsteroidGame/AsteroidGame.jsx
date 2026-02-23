import { useState, useEffect, useMemo } from "react";
import "./AsteroidGame.css";
import gameData from "../../data/gameData.json";
import { useNavigate } from "react-router-dom";
import PracticeLeave from "../PracticeLeave/PracticeLeave";
import FeedbackPopup from "../FeedbackPopup/FeedbackPopup";
import Grid from "../../assets/img/grid.svg";
import SpaceshipBase from "../../assets/img/spaceship-bubble.svg";
import AsteroidImg from "../../assets/img/asteroidcircle.svg";
import DaniHead from "../../assets/img/dani-head.svg";

const shuffle = array => [...array].sort(() => Math.random() - 0.5);

export default function AsteroidGame({ onBack }) {
    const navigate = useNavigate();
    const [asteroids] = useState(() => shuffle(gameData));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [popup, setPopup] = useState(null);
    const [showLeavePopup, setShowLeavePopup] = useState(false);

    const currentAsteroid = asteroids[currentIndex];

    const shuffledAnswers = useMemo(() => {
        if (!currentAsteroid) return [];
        const answers = [
            { text: currentAsteroid.correct, isCorrect: true },
            ...(currentAsteroid.wrongAnswers?.map(w => ({ text: w, isCorrect: false })) || [])
        ];
        return shuffle(answers);
    }, [currentAsteroid]);

    // Timer Logic
    useEffect(() => {
        if (!zoomed || popup) return;
        if (timeLeft <= 0) {
            setPopup("timeout");
            return;
        }
        const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
        return () => clearInterval(timer);
    }, [zoomed, timeLeft, popup]);

    // FIX: logic for selecting the asteroid on the grid
    const handleSelect = (selectedAsteroid) => {
        if (selectedAsteroid.id === currentAsteroid.id) {
            setZoomed(true); // Open the quiz if correct asteroid is clicked
        } else {
            // Optional: Provide feedback for clicking the wrong asteroid on the grid
            setPopup("wrong");
        }
    };

    // FIX: handleAnswer now properly triggers the popup state
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setPopup("correct");
        } else {
            setPopup("wrong");
        }
    };

    const nextLevel = () => {
        setPopup(null);
        setZoomed(false);
        setTimeLeft(60);
        if (currentIndex < asteroids.length - 1) {
            setCurrentIndex(p => p + 1);
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

            <h1 className="subj-header">פיצוץ אסטרואידים - תרגול</h1>

            <div className="game-bg-div">

                <p id="instructions">
                    לחצו על האסטרואיד עם הקואורדינטות שנשלחו אליכם
                </p>

                {/* Grid Background */}
                <img src={Grid} alt="grid" id="grid" />

                {/* Dani + Message */}
                <div id="dani-logo-talk">
                    <img src={DaniHead} alt="dani" />
                    <p id="message">
                        אני סומך עליכם!
                    </p>
                </div>

                {/* Spaceship Bubble */}
                <div id="spaceship-base">
                    <img src={SpaceshipBase} alt="spaceship" />
                    <strong>
                        {currentAsteroid.x}, {currentAsteroid.y}
                    </strong>
                </div>

                {/* Asteroid Grid */}
                <div className="grid">
                    {asteroids.map(a => (
                        <div
                            key={a.id}
                            className="grid-asteroid"
                            style={{
                                gridColumn: a.x + 1,
                                gridRow: 7 - a.y
                            }}
                            onClick={() => handleSelect(a)}
                        >
                            <img
                                src={AsteroidImg}
                                alt="asteroid"
                                className="asteroid-img"
                                style={{
                                    width: `${a.size || 60}px`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Quiz Layer */}
            {zoomed && !popup && (
                <div className="quiz-layer">
                    <div className="timer-container">
                        <div
                            className="timer-bar"
                            style={{ width: `${(timeLeft / 60) * 100}%` }}
                        />
                    </div>

                    <h2>{currentAsteroid.question}</h2>

                    <div className="answers-list">
                        {shuffledAnswers.map((ans, i) => (
                            <button
                                key={i}
                                className="ans-btn"
                                onClick={() => handleAnswer(ans.isCorrect)}
                            >
                                {ans.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Popup */}
            {popup && (
                <FeedbackPopup
                    type={popup}
                    onClose={nextLevel}
                    onRetry={() => setPopup(null)}
                    onBackToGrid={() => {
                        setPopup(null);
                        setZoomed(false);
                        setTimeLeft(60);
                    }}
                />
            )}

            {showLeavePopup && (
                <PracticeLeave
                    onBack={() => setShowLeavePopup(false)}
                    onConfirm={onBack}
                />
            )}
        </div>
    );
}