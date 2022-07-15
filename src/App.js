import './App.scss';
import logo from './images/logo.svg'
import hero from './images/bb-hero.jpg'
import releaseImage from './images/enton.jpg'

function App() {
  return (
    <div className="App">
      <div className="container container--top">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href='#about'>About</a>
            </li>
            <li className="navigation__item">
              <a href='#live'>Live</a>
            </li>
            <li className="navigation__item">
              <a href='#release'>Album</a>
            </li>
            <li className="navigation__item">
              <a href='#contact'>Kontakt</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <img src={logo} alt="Beautiful Blind logo" className="logo__image" />
        </div>
        <div className="hero">
          <img src={hero} alt="The Beautiful Blind" className="hero__image" />
        </div>

        <div className="content content--dual">
          <div className="content__col">
            <p className="lead">
              Die Katze deiner Nachbarn faucht dich jeden Morgen an,
              sie versperrt dir den Weg und du bist wieder zu spät dran –
              mit The Beautiful Blind ist das egal.
            </p>
          </div>
          <div className="content__col">
            <p>
              The Beautiful Blind sind ein noch unbeschriebenes Blatt,
              sie waren noch nie auf Österreich-Tournee und bewegen sich
              irgendwo zwischen Indietronic und Alternative Rock.
              Ihre Songtexte über Alltagssituationen, ein bisschen persönlicher
              Vergangenheitsbewältigung und ein bisschen Gesellschaftskritik sind
              mal humorvoll, mal melancholisch und mal beides oder weder noch.
            </p>

            <p>
              Die drei Ostschweizer Jonas, Fabian und Dominik und der Luzerner Ändu
              produzieren mit Gitarre, Drums, Synthesizer und Bass in
              einem staubigen Zürcher Keller Tunes zu denen man tanzen, sitzen,
              lachen, weinen oder mitgrölen kann.
            </p>

            <p>
              The Beautiful Blind sind auch ein Stück aus der Region für die Region.
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
              <a className="event__tickets cta" href="https://google.com">Tickets</a>
            </div>
            <hr className="hr hr--event" />

             <div className="event">
              <h2 className="event__date">27.08.2022</h2>
              <p className="event__location">Zürich Openair</p>
              <p  className="event__location">Glattbrugg ZH</p>
              <a  className="event__tickets cta" href="https://google.com">Tickets</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="container container--middle centered content">
        <img src={releaseImage} alt="Potrait of Enton" />
        <h2 className="title">Die letzte Rose</h2>
        <p className="description">Das neue Album<br />12. November 2022</p>

      </div>

      <div className="container container--bottom">
        <div className="content content--dual">
          <div className="content__col">
            <h2>Kontakt</h2>
            <a className="cta" href="mailto:https://google.com">info@fabian.ch</a>
          </div>
          <div className="content__col">
            <h2>Medien</h2>
            <a className="cta" href="https://google.com">Download Pressefotos</a>
          </div>
        </div>

        <hr className="hr"/>
        <div className="content centered">
          <span>fb</span>
          <span>insta</span>
          <span>tik</span>
        </div>

        <div className="content copyright">
          <span>2022 The Beautiful Blind</span>
        </div>


      </div>
    </div>
  );
}

export default App;
