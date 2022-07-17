import EventItem from "./EventItem";
// import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Events = () => {
  // const [events] = useAllPrismicDocumentsByType("events");
  return (
    <div className="content content--dual">
      {/* {console.log(events)} */}
      <div className="content__col ">
        <h1 className="headline headline--medium">Live</h1>
      </div>
      <div className="content__col">
        <EventItem />
        <hr className="hr hr--event" />
        <EventItem />
      </div>
    </div>
  );
};

export default Events;
