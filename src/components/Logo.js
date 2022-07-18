import "./Logo.scss";
import logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";

const Logo = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      if (window.scrollY >= 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={hasScrolled ? "logo logo--scrolled" : "logo"}>
      <img src={logo} alt="Beautiful Blind logo" className="logo__image" />
    </div>
  );
};

export default Logo;
