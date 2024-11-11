import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);
  return (
    <section>
      <article>
        <div className="sectionTitle">
          <h1>{profile.title}</h1>
        </div>
        <div className="sectionContent">
          <p>{profile.subTitle}</p>
        </div>
      </article>
      <div className="clear" />
    </section>
  );
};
export default Profile;
