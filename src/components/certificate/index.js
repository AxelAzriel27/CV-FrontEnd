const Certificate = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <img
        // src="../../../javascript_basic certificate.png"
        src={props.src}
        className="certificate"
        alt=""
      />
    </article>
  );
};

export default Certificate;
