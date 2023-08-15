import React, { useState } from 'react';
import './details-page.scss';
import { NavLink, useParams } from 'react-router-dom';
import events from '../../utils/data.json';
import { toast } from 'react-toast';

const DetailsPage = () => {
  const { id } = useParams();
  const event = events.filter((event) => event.eventId === Number(id))[0];
  const timeView = new Date(event.time);
  const date = timeView.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [stake, setStake] = useState('');

  const infoToast = () =>
    toast(
      `Спасибо, ваша ставка на матч 
          "${event.firstTeam} / ${event.secondTeam}"
          принята!`,
      {
        backgroundColor: '#048765',
        color: '#ffffff',
      }
    );

  return (
    <div className="details-page">
      <div className="wrapper">
        <div className="stake-zone">
          <div className="stake-zone__wrapper">
            <div className="details">
              <div className="details__title">{event.eventTitle}</div>
              <div className="details__time">{date}</div>
              <div className="details__teams">
                <span className="team__name">{event.firstTeam}</span>
                {' / '}
                <span className="team__name">{event.secondTeam}</span>
              </div>
            </div>
            <form className="radio-form">
              <input type="radio" name="question" value="homeTeam" id="homeTeam" />
              <label htmlFor="homeTeam" onClick={() => setStake('homeTeam')}>
                победа хозяев
              </label>

              <input type="radio" name="question" value="draw" id="draw" />
              <label htmlFor="draw" onClick={() => setStake('draw')}>
                ничья
              </label>

              <input type="radio" name="question" value="guestTeam" id="guestTeam" />
              <label htmlFor="guestTeam" onClick={() => setStake('guestTeam')}>
                победа гостей
              </label>
            </form>

            <div className="stake">
              {stake === '' && <span>?</span>}
              {stake === 'homeTeam' && <span>{event.coefficientFirstTeam}</span>}
              {stake === 'draw' && <span>{event.coefficientDraw}</span>}
              {stake === 'guestTeam' && <span>{event.coefficientSecondTeam}</span>}
            </div>

            <div className="button__wrapper">
              <button className="button__btn" disabled={!stake} onClick={infoToast}>
                <NavLink to={'/'}>Сделать ставку</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
