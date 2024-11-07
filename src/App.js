// import "./assets/css/style.css";

const App = () => {
  return (
    <div id="cv" className="instaFade">
      <div className="mainDetails">
        <div id="headshot" className="quickFade">
          <img src="../IMG_11701.png" alt="Alan Smith" />
        </div>
        <div id="name">
          <h1 className="quickFade delayTwo">Axel Kopalit</h1>
          <h2 className="quickFade delayThree">Informatika</h2>
        </div>
        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:4xelkopalit.com" target="_blank" rel="noreferrer">
                4xelkopalit@gmail.com
              </a>
            </li>
            <li>
              IG:{" "}
              <a
                href="https://www.instagram.com/kopalitaxel/"
                target="_blank"
                rel="noreferrer"
              >
                @kopalitaxel
              </a>
            </li>
            <li>
              FB:{" "}
              <a
                href="https://www.facebook.com/axel.kopalit.27?locale=id_ID"
                target="_blank"
                rel="noreferrer"
              >
                Axel Kopalit
              </a>
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
      <div id="mainArea" className="quickFade delayFive">
        <section>
          <article>
            <div className="sectionTitle">
              <h1>Personal Profile</h1>
            </div>
            <div className="sectionContent">
              <p>
                Saya adalah mahasiswa Informatika di Universitas Klabat (Unklab)
                yang antusias dalam mengembangkan keterampilan teknologi dan
                pemrograman. Selain mendalami dunia digital dan sistem
                informasi, saya juga gemar menonton film sebagai cara untuk
                memperluas wawasan dan mencari inspirasi. Hobi ini tidak hanya
                menjadi sarana hiburan, tetapi juga membantu saya mempelajari
                berbagai sudut pandang dan ide baru yang sering kali bermanfaat
                dalam studi saya.
              </p>
            </div>
          </article>
          <div className="clear" />
        </section>
        <section>
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>
          <div className="sectionContent">
            <article>
              <h2>Universitas Klabat</h2>
              <p className="subDetails">S1-Informatika</p>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim.
              </p> */}
            </article>
            <article>
              <h2>SMA Kristen Eben Haezar</h2>
              <p className="subDetails">IPA</p>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim.
              </p> */}
            </article>
            <article>
              <h2>SMP Kristen Eben Haezar 1</h2>
              <br />
            </article>
            <article>
              <h2>SD Kristen Eben Haezar 1</h2>
              <br />
            </article>
          </div>
          <div className="clear" />
        </section>
        <section>
          <div className="sectionTitle">
            <h1>Work Experience</h1>
          </div>
          <div className="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p className="subDetails">April 2011 - Present</p>
              <img src="../IMG_11701.png" className="certificate" alt="" />
            </article>
            <article>
              <h2>Job Title at Company</h2>
              <p className="subDetails">Janruary 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                sapien quis libero interdum porttitor.
              </p>
            </article>
            <article>
              <h2>Job Title at Company</h2>
              <p className="subDetails">October 2004 - December 2006</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies massa et erat luctus hendrerit. Curabitur non
                consequat enim. Vestibulum bibendum mattis dignissim. Proin id
                sapien quis libero interdum porttitor.
              </p>
            </article>
          </div>
          <div className="clear" />
        </section>
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
      </div>
    </div>
  );
};

export default App;
