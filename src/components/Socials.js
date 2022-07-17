import "./Socials.scss";

const Socials = ({ icons }) => {
  return (
    <div className="socials">
      {icons.map((icon) => (
        <a href={icon.url} key={icon.id}>
          <img
            src={`/assets/icons/${icon.fileName}`}
            alt={icon.altText}
            className="socials__icon"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
