import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__map'>
          <div className='footer__icon__firest'></div>
          <div className='footer__icon__second'></div>
        </div>
        <div className='footer__adress'>
          <div className='footer__adress__content'>
            <h4>Бассейн WorkClass</h4>
            <div className='adress__block'>
              <div className='icon__first'></div>
              <p>Невский 140</p>
            </div>
            <div className='adress__block'>
              <div className='icon__seccond'></div>
              <p>м. Спасская</p>
            </div>
            <div className='adress__block'>
              <div className='icon__thered'></div>
              <p>Запись по договоренности</p>
            </div>
            <button>Записаться на сеанс</button>
          </div>
          <div className='footer__adress__content'>
            <h4>Бассейн "На Гороховой"</h4>
            <div className='adress__block'>
              <div className='icon__first'></div>
              <p>3-й проезд Иванова</p>
            </div>
            <div className='adress__block'>
              <div className='icon__seccond'></div>
              <p>м. Крестовский остров</p>
            </div>
            <div className='adress__block'>
              <div className='icon__thered'></div>
              <p>Запись по договоренности</p>
            </div>
            <button>Записаться на сеанс</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;