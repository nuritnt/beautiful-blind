import "./EventItem.scss";
import dayjs from "dayjs";

const EventItem = ({ event }) => {
  const date = event.data.event_date;
  const formattedDate = dayjs(date).format("DD.MM.YYYY");

  return (
    <>
      {event && (
        <div className="event">
          <h2 className="event__date">{formattedDate}</h2>
          <p className="event__location">{event.data.event_name[0].text}</p>
          <p className="event__location">{event.data.event_location[0].text}</p>
          <a className="event__tickets cta" href={event.data.event_link.url}>
            Tickets
          </a>
        </div>
      )}
    </>
  );
};

export default EventItem;
