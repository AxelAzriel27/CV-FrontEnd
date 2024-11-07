const Header = () => {
  return (
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
  );
};

export default Header;
