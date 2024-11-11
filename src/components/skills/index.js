import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);
  return (
    <section>
      <div className="sectionTitle">
        <h1>{skills.title}</h1>
      </div>
      <div className="sectionContent">
        <ul className="keySkills">
          <li>{skills.first}</li>
          <li>{skills.second}</li>
          <li>{skills.third}</li>
          <li>{skills.fourth}</li>
          <li>{skills.fifth}</li>
          <li>{skills.sixth}</li>
        </ul>
      </div>
      <div className="clear" />
    </section>
  );
};
export default Skills;
