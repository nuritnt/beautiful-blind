import "./Release.scss";
import releaseImage from "../assets/images/enton.jpg";
import spotify from "../assets/icons/spotify.svg";

const Release = () => {
  return (
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
  );
};

export default Release;
