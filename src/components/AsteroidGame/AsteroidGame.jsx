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

export default function AsteroidGame({ onBack }) {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [popup, setPopup] = useState(null);
    const [showLeavePopup, setShowLeavePopup] = useState(false);
    const [daniMessage, setDaniMessage] = useState("אני סומך עליכם!");
    const currentAsteroid = gameData[currentIndex];

    const shuffledAnswers = useMemo(() => {
        if (!currentAsteroid) return [];

        const answers = [
            { text: currentAsteroid.correct, isCorrect: true },
            ...(currentAsteroid.wrongAnswers?.map(w => ({
                text: w,
                isCorrect: false
            })) || [])
        ];

        return [...answers].sort(() => Math.random() - 0.5);
    }, [currentAsteroid]);

    useEffect(() => {
        if (!zoomed || popup) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setPopup("timeout");
                    return 0;
                }
                return prev - 1;
            });
        }, 800);

        return () => clearInterval(timer);
    }, [zoomed, popup]);

    const handleSelect = (clickedId) => {
        if (!currentAsteroid) return;
        if (clickedId === currentAsteroid.id) {
            setDaniMessage("פגעת בול!");
            setTimeout(() => {
                setZoomed(true);
            }, 1000);

        } else {
            setDaniMessage("קצת פספסת...");
        }
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setDaniMessage("פגעת בול!");
            setPopup("correct");
        } else {
            setDaniMessage("קצת פספסת...");
            setPopup("wrong");
        }
    };

    const nextLevel = () => {
        setPopup(null);
        setZoomed(false);
        setTimeLeft(60);
        setDaniMessage("אני סומך עליכם!");
        if (currentIndex + 1 < gameData.length) {
            setCurrentIndex(prev => prev + 1);
        } else {
            navigate("/end");
        }
    };

    if (!currentAsteroid) return null;

    return (
        <div className="game-wrapper">
            <button
                className="back-button"
                onClick={() => setShowLeavePopup(true)}
            >
                חזור
            </button>

            <h1 className="subj-header">פיצוץ אסטרואידים - תרגול</h1>

            <div className="game-bg-div">
                <p id="instructions">
                    לחצו על האסטרואיד עם הקואורדינטות שנשלחו אליכם
                </p>

                <div id="dani-logo-talk">
                    <img src={DaniHead} alt="dani" />
                    <p id="message-text">{daniMessage}</p>
                </div>

                <div id="spaceship-base">
                    <img
                        src={SpaceshipBase}
                        alt="spaceship"
                        id="spaceship-base-img"
                    />
                    <strong id="target-coords">
                        {currentAsteroid.x}, {currentAsteroid.y}
                    </strong>
                </div>

                <div className="grid-wrapper">
                    <img src={Grid} alt="grid" className="grid-image" />

                    <div className="grid">
                        {gameData.map((a) => (
                            <div
                                key={a.id}
                                className="grid-asteroid"
                                style={{
                                    gridColumn: 7 - a.y,
                                    gridRow: 7 - a.x
                                }}
                                onClick={() => handleSelect(a.id)}
                            >
                                <img
                                    src={AsteroidImg}
                                    alt="asteroid"
                                    style={{ width: `${a.size || 45}px` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {zoomed && !popup && (
                <div className="quiz-layer">
                    <div className="timer-container">
                        <div
                            className="timer-bar"
                            style={{
                                width: `${(timeLeft / 60) * 100}%`
                            }}
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