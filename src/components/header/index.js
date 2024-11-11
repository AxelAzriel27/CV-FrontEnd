import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <div className="mainDetails">
      <div id="headshot" className="quickFade">
        <img src={`../${header.image}`} alt="" />
      </div>
      <div id="name">
        <h1 className="quickFade delayTwo">{header.title}</h1>
        <h3 className="quickFade delayThree">{header.subTitle}</h3>
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
            GitHub:{" "}
            <a
              href="https://github.com/AxelAzriel27"
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
  );
};

export default Header;
