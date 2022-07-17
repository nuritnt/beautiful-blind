// components
import Navigation from "./components/Nav";

// styles
import "./App.scss";

// assets
import logo from "./images/logo.svg";
import hero from "./images/bb-hero.jpg";
import releaseImage from "./images/enton.jpg";
import spotify from "./icons/spotify.svg";

function App() {
  return (
    <div className="App">
      <div className="container container--top">
        <Navigation />

        <div className="logo">
          <img src={logo} alt="Beautiful Blind logo" className="logo__image" />
        </div>
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

        <div className="content content--dual">
          <div className="content__col ">
            <h1 className="headline headline--medium">Live</h1>
          </div>
          <div className="content__col">
            <div className="event">
              <h2 className="event__date">05.08.2022</h2>
              <p className="event__location">Openair Friendsheep</p>
              <p className="event__location">Mosnang SG</p>
              <a className="event__tickets cta" href="https://google.com">
                Tickets
              </a>
            </div>
            <hr className="hr hr--event" />

            <div className="event">
              <h2 className="event__date">27.08.2022</h2>
              <p className="event__location">Zürich Openair</p>
              <p className="event__location">Glattbrugg ZH</p>
              <a className="event__tickets cta" href="https://google.com">
                Tickets
              </a>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>

      <div className="container container--middle">
        <div className="content release centered">
          <img
            src={releaseImage}
            alt="Potrait of Enton"
            className="release__image"
          />
          <h2 className="headline headline--large">Die letzte Rose</h2>
          <p className="small-hr">
            Das neue Album
            <br />
            12. November 2022
          </p>
          <div className="socials">
            <img src={spotify} alt="Spotify Logo" className="socials__icon" />
          </div>
        </div>
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
