import React from 'react';
import Logo from '../Logo/Logo';
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/">Сеансы</a></li>
          <li><a href="/">Отзывы</a></li>
          <li><a href="/">Контакты</a></li>
          <li><a href="/">Новости</a></li>
          <li><a href="/">Обо мне</a></li>
          <li><a href="/">Блог</a></li>
        </ul>
      </nav>
      <button>Записаться на сеанс</button>
    </header>
  );
};

export default Header;