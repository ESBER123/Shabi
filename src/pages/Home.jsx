import "../assets/styles/Home.css";
import FirstImage from "../images/First.png";

const Home = () => {
  return (
    <div className="home">
      <img src={FirstImage} alt="Clinic" />
      <section className="hero">
        <div className="hero-content">
          <span>Modern Orthodontic Clinic</span>

          <h1>Orthodontics Dr. Shadi Loutfi</h1>

          <p>
            Welcome to our orthodontic practice. We provide modern treatments,
            professional care and the latest dental technologies for children
            and adults.
          </p>
        </div>
      </section>

      <section className="about">
        <div className="about-images"></div>

        <div className="about-text">
          <span>Orthodontics</span>

          <h2>We don't simply bring back your smile</h2>

          <p>
            Orthodontic treatment is much more than having straight teeth.
            Healthy teeth, a proper bite and a confident smile are our goals.
          </p>

          <button>Learn More</button>
        </div>
      </section>

      <section className="features">
        <h4>Our Promise</h4>

        <h2>How We Work</h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>Best Possible Treatment</h3>

            <p>
              We focus on long-term dental health while achieving a beautiful
              smile.
            </p>
          </div>

          <div className="feature">
            <h3>Patient Satisfaction</h3>

            <p>
              Every patient receives personal attention and high quality care.
            </p>
          </div>

          <div className="feature">
            <h3>Personal Care</h3>

            <p>
              We answer all your questions and provide support during every
              stage of treatment.
            </p>
          </div>

          <div className="feature">
            <h3>Active Collaboration</h3>

            <p>
              Successful treatment depends on teamwork between doctor and
              patient.
            </p>
          </div>

          <div className="feature">
            <h3>Friendly Team</h3>

            <p>
              We enjoy working with children, teenagers and adults in a relaxed
              environment.
            </p>
          </div>

          <div className="feature">
            <h3>Continuous Training</h3>

            <p>
              We continuously improve our knowledge to provide modern
              orthodontic care.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>You Will Be in the Best Hands</h2>

        <div className="team-grid">
          <div>
            <h3>Patient First</h3>

            <p>Every patient receives the time and attention they deserve.</p>
          </div>

          <div>
            <h3>Qualified Team</h3>

            <p>
              Our team is constantly improving to provide the highest quality
              care.
            </p>
          </div>

          <div>
            <h3>Multiple Languages</h3>

            <p>German, English, Arabic, Turkish, Russian and many more.</p>
          </div>

          <div>
            <h3>We Love Our Work</h3>

            <p>
              Respect, teamwork and patient care are the values that define our
              clinic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
