// components
import Navigation from "./components/Nav";
import Logo from "./components/Logo";
import Events from "./components/Events";
import Release from "./components/Release";

// styles
import "./App.scss";

// assets
import hero from "./assets/images/bb-hero.jpg";
import spotify from "./assets/icons/spotify.svg";

function App() {
  return (
    <div className="App">
      <div className="container container--top">
        <Navigation />
        <Logo />
        <div className="hero">
          <img src={hero} alt="The Beautiful Blind" className="hero__image" />
        </div>

        <div className="content content--dual">
          <div className="content__col">
            <p className="lead">
              Die Katze deiner Nachbarn faucht dich jeden Morgen an, sie
              versperrt dir den Weg und du bist wieder zu spät dran – mit The
              Beautiful Blind ist das egal.
            </p>
          </div>
          <div className="content__col">
            <p>
              The Beautiful Blind sind ein noch unbeschriebenes Blatt, sie waren
              noch nie auf Österreich-Tournee und bewegen sich irgendwo zwischen
              Indietronic und Alternative Rock. Ihre Songtexte über
              Alltagssituationen, ein bisschen persönlicher
              Vergangenheitsbewältigung und ein bisschen Gesellschaftskritik
              sind mal humorvoll, mal melancholisch und mal beides oder weder
              noch.
            </p>

            <p>
              Die drei Ostschweizer Jonas, Fabian und Dominik und der Luzerner
              Ändu produzieren mit Gitarre, Drums, Synthesizer und Bass in einem
              staubigen Zürcher Keller Tunes zu denen man tanzen, sitzen,
              lachen, weinen oder mitgrölen kann.
            </p>

            <p>
              The Beautiful Blind sind auch ein Stück aus der Region für die
              Region.
            </p>
          </div>
        </div>
        <hr className="hr" />

        <Events />
        <hr className="hr" />
      </div>

      <div className="container container--middle">
        <Release />
        <hr className="hr" />
      </div>

      <div className="container container--bottom">
        <div className="content content--dual contact">
          <div className="content__col">
            <h2 className="headline headline--small contact__title">Kontakt</h2>
            <a className="cta" href="mailto:https://google.com">
              info@fabian.ch
            </a>
          </div>
          <div className="content__col">
            <h2 className="headline headline--small contact__title">Medien</h2>
            <a className="cta" href="https://google.com">
              Download Pressefotos
            </a>
          </div>
        </div>

        <hr className="hr" />
        <div className="content centered">
          <div className="socials">
            <img src={spotify} alt="Spotify Logo" className="socials__icon" />
            <img src={spotify} alt="Spotify Logo" className="socials__icon" />
            <img src={spotify} alt="Spotify Logo" className="socials__icon" />
          </div>
        </div>

        <div className="content copyright">
          <span>2022 The Beautiful Blind</span>
        </div>
      </div>
    </div>
  );
}

export default App;
