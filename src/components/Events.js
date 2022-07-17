import EventItem from "./EventItem";

const Events = () => {
  return (
    <div className="content content--dual">
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
