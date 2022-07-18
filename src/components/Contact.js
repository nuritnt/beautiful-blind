import "./Contact.scss";
import { useSinglePrismicDocument } from "@prismicio/react";

const Contact = () => {
  const [contact] = useSinglePrismicDocument("contact");

  return (
    <>
      {contact && (
        <div className="content content--dual contact">
          <div className="content__col">
            <h2 className="headline headline--small">Kontakt</h2>
            <div className="cta-wrap">
              {contact.data.contact_links.map((link, index) => (
                <a className="cta" href={link.link_url.url} key={index}>
                  {link.link_title}
                </a>
              ))}
            </div>
          </div>
          <div className="content__col">
            <h2 className="headline headline--small">Medien</h2>
            <div className="cta-wrap">
              {contact.data.media_links.map((link, index) => (
                <a
                  className="cta"
                  download
                  href={link.media_url.url}
                  key={index}
                >
                  {link.link_title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
