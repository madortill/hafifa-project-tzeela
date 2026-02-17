import { HashRouter, Routes, Route } from "react-router-dom";
import Opening from "./components/Opening/Opening";
import Dani from "./components/Dani/Dani";
import Content from "./components/Content/Content";
import End from "./components/End/End";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/intro" element={<Dani />} />
        <Route path="/home" element={<Content />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  );
};

export default App;
