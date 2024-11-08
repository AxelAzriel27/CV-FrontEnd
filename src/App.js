import "./assets/css/style.css";
import Certification from "./components/certification";
import Education from "./components/education";
import Header from "./components/header";
import Profile from "./components/profile";
import Skills from "./components/skills";

const App = () => {
  return (
    <div id="cv" className="instaFade">
      <Header />
      <div id="mainArea" className="quickFade delayFive">
        <Profile />
        <Education />
        <Skills />
        <Certification />
      </div>
    </div>
  );
};

export default App;
