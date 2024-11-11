import School from "../school";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education");

    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <section>
      <div className="sectionTitle">
        <h1>{education.title}</h1>
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
