const School = (props) => {
  return (
    <article>
      <h2>{props.schoolName}</h2>
      <p className="subDetails">{props.details}</p>
    </article>
  );
};
export default School;
