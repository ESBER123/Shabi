import team from "../data/teams.json";
import "../assets/styles/Teams.css";
const Teams = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>

        <div className="team-grid">
          {team.map((ueser) => (
            <div className="team-card" key={ueser.id}>
              <div className="image-box">
                <img src={ueser.image} alt={ueser.name} />
              </div>

              <div className="card-content">
                <h3>{ueser.name}</h3>

                <span className="position">{ueser.position}</span>

                <p>{ueser.description}</p>

                <button>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Teams;
