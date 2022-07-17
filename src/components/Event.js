import "./Event.scss";

const Event = () => {
  return (
    <div className="event">
      <h2 className="event__date">05.08.2022</h2>
      <p className="event__location">Openair Friendsheep</p>
      <p className="event__location">Mosnang SG</p>
      <a className="event__tickets cta" href="https://google.com">
        Tickets
      </a>
    </div>
  );
};

export default Event;
