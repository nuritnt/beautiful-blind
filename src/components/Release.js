import "./Release.scss";
import Socials from "./Socials";
import releaseIcons from "../assets/releaseIcons.json";
import { useSinglePrismicDocument } from "@prismicio/react";

const Release = () => {
  const [latest_release] = useSinglePrismicDocument("latest_release");
  return (
    <>
      {latest_release && (
        <div className="content release centered" id="release">
          <img
            src={latest_release.data.image.url}
            alt={latest_release.data.image_alt_text[0].text}
            className="release__image"
            width={latest_release.data.image.dimensions.width}
            height={latest_release.data.image.dimensions.height}
          />
          <h2 className="headline headline--large">
            {latest_release.data.title[0].text}
          </h2>
          <p className="small-hr release__description">
            {latest_release.data.description}
          </p>
          <Socials icons={releaseIcons.icons} />
        </div>
      )}
    </>
  );
};

export default Release;
