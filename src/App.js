import "./assets/css/style.css";
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
