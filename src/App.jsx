import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/About";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
