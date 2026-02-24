import { useState } from "react";
import Definition from "../Definition/Definition";
import DefinitionQuizIntro from "../DefinitionQuizIntro/DefinitionQuizIntro";
import DefinitionQuiz from "../DefinitionQuiz/DefinitionQuiz";
import DefinitionLeave from "../DefinitionLeave/DefinitionLeave";
import DefinitionScore from "../DefinitionScore/DefinitionScore";

const DefinitionControl = ({ onBack }) => {
  const [step, setStep] = useState(0);
  const [showLeavePopup, setShowLeavePopup] = useState(false);
  const [finalFailCount, setFinalFailCount] = useState(0);

  const next = () => setStep(prev => prev + 1);

  const back = () => {
    if (showLeavePopup) {
      setShowLeavePopup(false);
    } else if (step === 0) {
      onBack();
    } else {
      setStep(prev => prev - 1);
    }
  };

  const goToRoadmap = () => {
    onBack();
  };


  const confirmLeave = () => {
    setShowLeavePopup(false);
    onBack();
  };

  // normal pages
  const pages = [
    <Definition onNext={next} onBack={back} />,
    <DefinitionQuizIntro onNext={next} onBack={back} />,
    <DefinitionQuiz onNext={next} onLeave={() => setShowLeavePopup(true)} setFinalFailCount={setFinalFailCount} />,
    <DefinitionScore failCount={finalFailCount} onFinish={goToRoadmap}/>
  ];

  return (
    <div className="definition-wrapper">
      {pages[step]}

      {showLeavePopup && (
        <DefinitionLeave onBack={() => setShowLeavePopup(false)} onConfirm={confirmLeave} />
      )}
    </div>
  );
};

export default DefinitionControl;
