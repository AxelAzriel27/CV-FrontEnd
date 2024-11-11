import School from "../school";

const Education = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h1>Education</h1>
      </div>
      <div className="sectionContent">
        <School schoolName="Universitas Klabat" details="S1 - Informatika" />
        <School schoolName="SMA Kristen Eben Haezar" details="IPA" />
        <School schoolName="SMP Kristen Eben Haezar" details=" " />
        <br />
        <School schoolName="SD Kristen Eben Haezar" details=" " />
        <br />
      </div>
      <div className="clear" />
    </section>
  );
};
export default Education;
