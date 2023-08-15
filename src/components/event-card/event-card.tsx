import React from 'react';
import './event-card.scss';
import { NavLink } from 'react-router-dom';
import { IEventCard } from '../../../types';

type EventCardProps = {
  event: IEventCard;
};

const EventCard = ({ event }: EventCardProps) => {
  const timeView = new Date(event.time);
  const date = timeView.toLocaleString('ru', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <NavLink to={`/details/${event.eventId}`} className="event-card">
      <div className="event-card__time">{date}</div>
      <div className="event-card__title">{event.eventTitle}</div>
    </NavLink>
  );
};

export default EventCard;
