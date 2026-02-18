import { useState } from "react";
import AsteroidPractice from "../AsteroidPractice/AsteroidPractice";
import AsteroidGameIntro from "../AsteroidGameIntro/AsteroidGameIntro";
import AsteroidGame from "../AsteroidGame/AsteroidGame";

const AsteroidPracticeControl = ({ onBack }) => {
  const [step, setStep] = useState(0);

  const next = () => setStep(prev => prev + 1);
  const goToRoadmap = () => onBack();

  return (
    <div className="practice-container">
      {step === 0 && <AsteroidPractice onNext={next} onBack={onBack} />}
      {step === 1 && <AsteroidGameIntro onNext={next} onBack={() => setStep(0)} />}
      {step === 2 && <AsteroidGame onBack={onBack} />}
    </div>
  );
};

export default AsteroidPracticeControl;

