import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './profile/Index';
import './header.css';
import Search from './search/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__logo">Newspaper</div>
        <div className="header__link">
          <NavLink exact to={'/'}>
            Главная
          </NavLink>
        </div>
        <div className="header__link">
          <NavLink to={'/news'}>Новости</NavLink>
        </div>
      </div>
      <Search />
      <Profile />
    </div>
  );
}

export default Header;
