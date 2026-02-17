import { useState } from "react";
import Roadmap from "../Roadmap/Roadmap";
import Learn from "../Learn/Learn";
import DefinitionControl from "../DefinitionControl/DefinitionControl";
import AsteroidInfo from "../AsteroidInfo/AsteroidInfo";
import AsteroidPractice from "../AsteroidPractice/AsteroidPractice";
import Header from "../Header/Header";

const Content = () => {
    const [currentSubPage, setCurrentSubPage] = useState("roadmap");

    const planetNavigation = {
        pink: "learn",
        green: "definition",
        purple: "asteroidInfo",
        blue: "asteroidPractice",
    };

    const handlePlanetClick = (planetName) => {
        const nextPage = planetNavigation[planetName];
        if (nextPage) {
            setCurrentSubPage(nextPage);
        }
    };

    const handleBack = () => setCurrentSubPage("roadmap");

    return (
        <div className="content">
            <Header />

            {currentSubPage === "roadmap" && (
                <Roadmap onSelectPlanet={handlePlanetClick} />
            )}

            {currentSubPage === "learn" && <Learn onBack={handleBack} />}
            {currentSubPage === "definition" && <DefinitionControl onBack={handleBack} />}
            {currentSubPage === "asteroidInfo" && <AsteroidInfo onBack={handleBack} />}
            {currentSubPage === "asteroidPractice" && <AsteroidPractice onBack={handleBack} />}
        </div>
    );
};

export default Content;

