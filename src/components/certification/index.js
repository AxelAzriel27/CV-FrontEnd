import Certificate from "../certificate";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#ffffff",
};

const Certification = () => {
  const [certificate, setCertificate] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const certificateRef = ref(db, "certificate");
    setLoading(true);

    onValue(certificateRef, (snapshot) => {
      const data = snapshot.val();
      setCertificate(data);
      setLoading(false);
    });
  }, []);
  return (
    <section>
      <div className="sectionTitle">
        <h1>{certificate.title}</h1>
      </div>
      {!loading && (
        <div className="sectionContent">
          <Certificate
            title={certificate.first}
            src={`data:image/jpeg;base64, ${certificate.img1}`}
          />
          <br />
          <Certificate
            title={certificate.second}
            src={`data:image/jpeg;base64, ${certificate.img2}`}
          />
        </div>
      )}
      {loading && <ClipLoader cssOverride={override} size={50} />}
      <div className="clear" />
    </section>
  );
};

export default Certification;
