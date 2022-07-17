import "./Logo.scss";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Beautiful Blind logo" className="logo__image" />
    </div>
  );
};

export default Logo;
