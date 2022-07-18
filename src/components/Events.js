import EventItem from "./EventItem";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Events = () => {
  const [events] = useAllPrismicDocumentsByType("events");
  const sortedEvents = events
    ? events.sort(
        (a, b) => new Date(a.data.event_date) - new Date(b.data.event_date)
      )
    : [];

  return (
    <>
      <div className="content content--dual">
        <div className="content__col ">
          <h1 className="headline headline--medium">Live</h1>
        </div>
        <div className="content__col">
          {sortedEvents.map((event) => {
            return <EventItem event={event} key={event.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
