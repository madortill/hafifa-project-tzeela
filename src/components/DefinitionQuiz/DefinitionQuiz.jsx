import React, { useState, useRef, useEffect } from "react";
import styles from "./DefinitionQuiz.module.css";
import Table from "../../assets/img/table.svg";
import Baby from "../../assets/img/baby.png";
import Lamp from "../../assets/img/lamp.png";
import SimpleAstroid from "../../assets/img/asteroidcircle.svg";
import backBtn from "../../assets/img/back-btn.svg";

const QUIZ_ITEMS = [
  { id: 1, name: "table", src: Table, type: "friend", scale: 1 },
  { id: 2, name: "asteroid1", src: SimpleAstroid, type: "asteroid", scale: 0.8 },
  { id: 3, name: "baby", src: Baby, type: "friend", scale: 1.3 },
  { id: 5, name: "lamp", src: Lamp, type: "friend", scale: 1.1 },
  { id: 4, name: "asteroid2", src: SimpleAstroid, type: "asteroid", scale: 0.8 },
];

const DefinitionQuiz = ({ onNext, onLeave, setFinalFailCount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [activeMoon, setActiveMoon] = useState(null);

  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const greenZoneRef = useRef(null);
  const redZoneRef = useRef(null);

  const currentItem = QUIZ_ITEMS[currentIndex];

  useEffect(() => {
    setFinalFailCount(failCount);
  }, [failCount, setFinalFailCount]);

  const handleStart = (e) => {
    if (feedback) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startPos.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPosition({
      x: clientX - startPos.current.x,
      y: clientY - startPos.current.y,
    });
  };

  const handleEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

    const greenRect = greenZoneRef.current.getBoundingClientRect();
    const redRect = redZoneRef.current.getBoundingClientRect();

    let droppedZone = null;
    if (clientX >= greenRect.left && clientX <= greenRect.right && clientY >= greenRect.top && clientY <= greenRect.bottom) {
      droppedZone = "friend";
    } else if (clientX >= redRect.left && clientX <= redRect.right && clientY >= redRect.top && clientY <= redRect.bottom) {
      droppedZone = "asteroid";
    }

    if (droppedZone) {
      const isCorrect = currentItem.type === droppedZone;
      setActiveMoon({ side: droppedZone, isCorrect });

      if (isCorrect) {
        setFeedback("כל הכבוד!");
        setTimeout(() => {
          if (currentIndex < QUIZ_ITEMS.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setFeedback("");
            setPosition({ x: 0, y: 0 });
            setActiveMoon(null);
          } else {
            onNext();
          }
        }, 800);
      } else {
        setFeedback("ניסיון יפה, אבל פחות...");
        setFailCount((prev) => prev + 1);
        setTimeout(() => {
          setPosition({ x: 0, y: 0 });
          setFeedback("");
          setActiveMoon(null);
        }, 800);
      }
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={backBtn} alt="back" className={styles.backButton} onClick={onLeave} />
        </header>

        <main
          className={styles.mainContent}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseUp={handleEnd}
          onTouchEnd={handleEnd}
        >
          <h1 className={styles.subjHeader}>הגדרה - <br />אז מהו אסטרואיד?</h1>

          <div className={styles.visualGroup}>
            <div className={styles.quizBgDiv} ref={containerRef}>
              <div
                id={styles.greenHalfMoon}
                ref={greenZoneRef}
                className={activeMoon?.side === "friend" ? (activeMoon.isCorrect ? styles.glowGreen : styles.glowRed) : ""}
              >
                <p>ידיד</p>
              </div>
              <div
                id={styles.redHalfMoon}
                ref={redZoneRef}
                className={activeMoon?.side === "asteroid" ? (activeMoon.isCorrect ? styles.glowGreen : styles.glowRed) : ""}
              >
                <p>אסטרואיד</p>
              </div>

              {currentItem && (
                <img
                  src={currentItem.src}
                  alt={currentItem.name}
                  className={styles.quizObject}
                  onMouseDown={handleStart}
                  onTouchStart={handleStart}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${currentItem.scale || 1})`,
                    transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2)",
                    touchAction: "none",
                    userSelect: "none",
                  }}
                />
              )}

              {feedback && (
                <div className={`${styles.feedbackText} ${feedback === "כל הכבוד!" ? styles.good : styles.bad}`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefinitionQuiz;