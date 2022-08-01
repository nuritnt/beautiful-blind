import "./Socials.scss";

const Socials = ({ icons }) => {
  return (
    <div className="socials">
      {icons.map((icon) => (
        <a href={icon.url} key={icon.id} className="socials__link">
          <img
            src={`/assets/icons/${icon.fileName}`}
            alt={icon.altText}
            className="socials__icon"
            width={icon.width}
            height={icon.height}
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
