import { NavLink } from "react-router-dom";
import LogoImage from "../images/Logoo.png";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={LogoImage} alt="Logo" />
      </div>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/treatment">Treatment</NavLink>

        <NavLink to="/team">Team</NavLink>

        <NavLink to="/good-to-know">Good to know</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="language">en</div>
    </header>
  );
};

export default Header;
