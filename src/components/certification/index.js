import Certificate from "../certificate";

const Certification = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h1>Certifications</h1>
      </div>
      <div className="sectionContent">
        <Certificate
          title="HackerRank JavaScript Basic"
          src="../../../javascript_basic certificate.png"
        />
        <br />
        <Certificate
          title="Kaggle Pandas Certificate"
          src="../../../Pandas certificate.png"
        />
      </div>
      <div className="clear" />
    </section>
  );
};

export default Certification;
