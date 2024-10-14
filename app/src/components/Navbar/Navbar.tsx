import { Link } from "react-router-dom";
import logoSrc from "/img/logo-light.svg";
import Button from "../Button";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navigation">
        <div className="navigation__logo-box">
          <Link to="/">
            <img
              src={logoSrc}
              alt="German's Logo"
              className="navigation__logo"
            />
          </Link>
        </div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/about">About</Link>
            </li>
            <li className="navigation__item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="navigation__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="navigation__cta-box">
          <Button text="Subscribe" type="button" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
