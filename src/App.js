// components
import Navigation from "./components/Nav";
import Logo from "./components/Logo";
import Events from "./components/Events";
import Release from "./components/Release";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

// styles
import "./App.scss";

// assets
import hero from "./assets/images/bb-hero.jpg";
import socialMediaIcons from "./assets/socialMediaIcons.json";

// cms data
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";

function App() {
  const [about] = useSinglePrismicDocument("about");

  return (
    <div className="App">
      <div className="container container--top">
        <Navigation />
        <Logo />
        <div className="hero">
          <img
            src={hero}
            alt="The Beautiful Blind"
            className="hero__image"
            height="960"
            width="1440"
          />
        </div>

        {about && (
          <>
            <div className="content content--dual">
              <div className="content__col lead">
                <PrismicRichText field={about.data.about_lead} />
              </div>
              <div className="content__col">
                <PrismicRichText field={about.data.about_content} />
              </div>
            </div>
            <hr className="hr" />
          </>
        )}

        <Events />
        <hr className="hr" />
      </div>

      <div className="container container--middle">
        <Release />
        <hr className="hr" />
      </div>

      <div className="container container--bottom">
        <Contact />

        <hr className="hr" />
        <div className="content centered">
          <Socials icons={socialMediaIcons.icons} />
        </div>

        <div className="content copyright">
          <span>2022 The Beautiful Blind</span>
        </div>
      </div>
    </div>
  );
}

export default App;
