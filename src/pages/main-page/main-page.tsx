import React from 'react';
import './main-page.scss';
import data from '../../utils/data.json';
import EventCard from '../../components/event-card/event-card';

const MainPage = () => {
  const events = data.map((event) => <EventCard key={event.eventId} event={event} />);

  return (
    <div className="wrapper">
      <ul className="events__list">{events}</ul>
    </div>
  );
};

export default MainPage;
