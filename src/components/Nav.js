import "./Nav.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#about">About</a>
        </li>
        <li className="navigation__item">
          <a href="#live">Live</a>
        </li>
        <li className="navigation__item">
          <a href="#release">Album</a>
        </li>
        <li className="navigation__item">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
