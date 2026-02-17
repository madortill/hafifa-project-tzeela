import React, { useState, useRef, useEffect } from "react";
import "./DefinitionQuiz.css";
import Table from "../../assets/img/table.svg";
import Baby from "../../assets/img/baby.png";
import Lamp from "../../assets/img/lamp.png";
import SimpleAstroid from "../../assets/img/asteroidcircle.svg";

const QUIZ_ITEMS = [
  { id: 1, name: "table", src: Table, type: "friend" },
  { id: 2, name: "asteroid1", src: SimpleAstroid, type: "asteroid" },
  { id: 3, name: "baby", src: Baby, type: "friend" },
  { id: 5, name: "lamp", src: Lamp, type: "friend" },
  { id: 4, name: "asteroid2", src: SimpleAstroid, type: "asteroid" },
];

const DefinitionQuiz = ({ onNext, onLeave, setFinalFailCount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const greenZoneRef = useRef(null);
  const redZoneRef = useRef(null);

  const currentItem = QUIZ_ITEMS[currentIndex];

  // Keep parent in sync whenever failCount updates
  useEffect(() => {
    setFinalFailCount(failCount);
  }, [failCount, setFinalFailCount]);

  const handleStart = () => {
    if (feedback) return;
    setIsDragging(true);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: clientX - rect.left - rect.width / 2,
        y: clientY - rect.top - rect.height / 2,
      });
    }
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
      if (currentItem.type === droppedZone) {
        setFeedback("כל הכבוד!");
        setTimeout(() => {
          if (currentIndex < QUIZ_ITEMS.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setFeedback("");
            setPosition({ x: 0, y: 0 });
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
        }, 800);
      }
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div className="definition-quiz" onMouseMove={handleMove} onTouchMove={handleMove} onMouseUp={handleEnd} onTouchEnd={handleEnd}>
      <button className="back-button" onClick={onLeave}>חזור</button>
      <h1 className="subj-header">הגדרה - אז מהו אסטרואיד?</h1>
      <div className="quiz-bg-div" ref={containerRef}>
        <div id="green-half-moon" ref={greenZoneRef}><p>ידיד</p></div>
        <div id="red-half-moon" ref={redZoneRef}><p>אסטרואיד</p></div>
        {currentItem && (
          <img
            src={currentItem.src}
            alt={currentItem.name}
            id="quiz-object"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              zIndex: 10,
              touchAction: "none",
              userSelect: "none",
            }}
          />
        )}
        {feedback && (
          <div className={`feedback-text ${feedback === "כל הכבוד!" ? "good" : "bad"}`}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefinitionQuiz;