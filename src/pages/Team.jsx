import doctorImage from "../images/doctor.png";
import "../assets/styles/Team.css";
const Team = () => {
  return (
    <div className="doctor-page">
      <section className="hero">
        <div className="hero-text">
          <span className="subtitle">About Me</span>

          <h1>Dr. Shadi Loutfi</h1>

          <div className="line"></div>

          <blockquote>
            "Helping people to love their smile is a great job!"
          </blockquote>

          <p>
            I really enjoy working with patients who appreciate our work and are
            happy with the treatment result – a new, radiant smile! Working in a
            great and professional team is fantastic. Helping our patients gain
            confidence through beautiful smiles is something I truly enjoy.
          </p>

          <div className="languages">
            <h3>Languages</h3>

            <div className="tags">
              <span>🇩🇪 German</span>
              <span>🇬🇧 English</span>
              <span>🇸🇾 Arabic</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={doctorImage} alt="Doctor" />
        </div>
      </section>

      <section className="qualification">
        <h2>Qualifications</h2>

        <div className="line"></div>

        <div className="card">
          <h3>Academic Career</h3>

          <ul>
            <li>Bachelor of Dentistry DDS – UOK, </li>
            <li>Dentistry Nostrification – University of Vienna</li>
            <li>MSc Orthodontics – University of Krems</li>
            <li>FACE Orthodontics Program – Graz, Ljubljana & Zagreb</li>
            <li>Modern Orthodontics & Smile Design Specialist</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Team;
