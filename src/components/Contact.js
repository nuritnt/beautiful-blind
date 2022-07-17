import "./Contact.scss";

const Contact = () => {
  return (
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
  );
};

export default Contact;
