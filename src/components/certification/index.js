const Certification = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h1>Certifications</h1>
      </div>
      <div className="sectionContent">
        <article>
          <h1>HackerRank JavaScript Basic</h1>
          <img
            src="../../../javascript_basic certificate.png"
            className="certificate"
            alt=""
          />
        </article>
        <br />
        <article>
          <h1>Kaggle Pandas certificate</h1>
          <img
            src="../../../Pandas certificate.png"
            className="certificate"
            alt=""
          />
        </article>
      </div>
      <div className="clear" />
    </section>
  );
};

export default Certification;
