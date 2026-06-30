import "../assets/styles/Treatment.css";
const Treatment = () => {
  return (
    <div className="container">
      <div className="left">
        <h4>Your Treatment</h4>

        <h1>A perfect result requires your participation</h1>

        <p>
          Orthodontic treatment takes time and patience. We explain every step
          to help you achieve the best result.
        </p>

        <div className="cards">
          <div className="card">Preparation</div>

          <div className="card">Treatment</div>

          <div className="card">Your Role</div>

          <div className="card">Costs</div>
        </div>
      </div>

      <div className="right">{/* <img src={doctor} alt="Doctor" /> */}</div>
    </div>
  );
};
export default Treatment;
