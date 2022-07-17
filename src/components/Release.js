import "./Release.scss";
import releaseImage from "../assets/images/enton.jpg";
import Socials from "./Socials";
import releaseIcons from "../assets/releaseIcons.json";

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
      <Socials icons={releaseIcons.icons} />
    </div>
  );
};

export default Release;
