import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h1 className="header__title">Ставки на спорт</h1>
        <span className="header__subtitle">делают здесь</span>
      </div>
    </header>
  );
};

export default Header;
