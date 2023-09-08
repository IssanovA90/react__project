import React from 'react';
import "./Main.css"
import Grid from '../Grid/Grid';
import Slider from '../Slider/Slider';
import Navigate from '../Navigate/Navigate';
import RitmStyle from '../RitmStyle/RitmStyle';
import Price from '../Price/Price';

const Main = () => {
  const { main__block, main__subtitle, left, subtitle_content, right, main__title,
    title_content, block__Ritmstyle } = styles;
  return (
    <main>
      <section>
        <div className={main__block}>
          <div className={main__subtitle}>
            <div className={`${left}`}></div>
            <p className={subtitle_content}>Укрепление здоровья</p>
            <div className={`${left} ${right}`}></div>
          </div>
          <div className={main__title}>
            <p className={title_content}>Акватерапия RitmStyle</p>
          </div>
        </div>
      </section>
      <section>
        <div className={block__Ritmstyle}>
          <div className={`${left}`}></div>
          <p>Сеансы RitmStyle</p>
          <div className={`${left} ${right}`}></div>
        </div>
        <Grid />
        <div className={block__Ritmstyle}>
          <div className={`${left}`}></div>
          <p>Отзывы</p>
          <div className={`${left} ${right}`}></div>
        </div>
      </section>
      <section>
        <Slider />
        <Navigate />
        <div className={block__Ritmstyle}>
          <div className={`${left}`}></div>
          <p>Об RitmStyle</p>
          <div className={`${left} ${right}`}></div>
        </div>
        <RitmStyle />
        <div className={block__Ritmstyle}>
          <div className={`${left}`}></div>
          <p>Стоимость сеансов</p>
          <div className={`${left} ${right}`}></div>
        </div>
        <Price />
      </section>
    </main>
  );
};
const styles = {
  main__block: 'main__block',
  main__subtitle: 'main__subtitle',
  left: 'left',
  subtitle_content: 'subtitle_content',
  right: 'right',
  main__title: 'main__title',
  title_content: 'title_content',
  block__Ritmstyle: 'block__Ritmstyle',
};
export default Main;