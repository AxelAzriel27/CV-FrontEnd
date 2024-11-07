import "./assets/css/style.css";
import Education from "./components/education";
import Header from "./components/header";
import Profile from "./components/profile";

const App = () => {
  return (
    <div id="cv" className="instaFade">
      <Header />
      <div id="mainArea" className="quickFade delayFive">
        <Profile />
        <Education />
        <section>
          <div className="sectionTitle">
            <h1>Key Skills</h1>
          </div>
          <div className="sectionContent">
            <ul className="keySkills">
              <li>Python </li>
              <li>C/C++</li>
              <li>JS</li>
              <li>C#</li>
              <li>React/React JS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="clear" />
        </section>
        <section>
          <div className="sectionTitle">
            <h1>Certifications</h1>
          </div>
          <div className="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p className="subDetails">April 2011 - Present</p>
              <img src="../IMG_11701.png" className="certificate" alt="" />
            </article>
            <br />
            <article>
              <h2>Job Title at Company</h2>
              <p className="subDetails">Janruary 2007 - March 2011</p>
              <img src="../IMG_11701.png" className="certificate" alt="" />
            </article>
          </div>
          <div className="clear" />
        </section>
      </div>
    </div>
  );
};

export default App;
