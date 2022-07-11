import './App.scss';
import releaseImage from './images/enton.jpg'

function App() {
  return (
    <div className="App">
      <div className="container container--top">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">About</li>
            <li className="navigation__item">Live</li>
            <li className="navigation__item">Album</li>
            <li className="navigation__item">Kontakt</li>
          </ul>
        </nav>

        <div className="logo">LOGO</div>
        <div className="hero">HERO??</div>

        <div className="content content--dual">
          <div className="content__col"></div>
          <div className="content__col"></div>
        </div>

        <div className="content content--dual">
          <div className="container__col">
            <h1>Live</h1>
          </div>
          <div className="container__col">
            <div className="container__item">
              <h2>05.08.2022</h2>
              <p>Openair Friendsheep</p>
              <p>Mosnang SG</p>
              <a href="https://google.com">Tickets</a>
            </div>

             <div className="container__item">
              <h2>27.08.2022</h2>
              <p>Zürich Openair</p>
              <p>Glattbrugg ZH</p>
              <a href="https://google.com">Tickets</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container container--middle centered">
        <img src={releaseImage} alt="Potrait of Enton" />
        <h2 className="title">Die letzte Rose</h2>
        <p className="description">Das neue Album<br />12. November 2022</p>

      </div>

      <div className="container container--bottom">
        <div className="content content--dual">
          <div className="content__col">
            <h2>Kontakt</h2>
            <a href="mailto:https://google.com">info@fabian.ch</a>
          </div>
          <div className="content__col">
            <h2>Medien</h2>
            <a href="https://google.com">Download Pressefotos</a>
          </div>
        </div>
      </div>

       <div className="content centered">
          <span>fb</span>
          <span>insta</span>
          <span>tik</span>
      </div>

      <div className="content copyright">
        <span>2022 The Beautiful Blind</span>
      </div>
    </div>
  );
}

export default App;
