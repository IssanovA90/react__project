import React from 'react';
import "./Main.css"
import Grid from '../Grid/Grid';
import SimpleCarousel from '../Slider/Slider';
import RitmStyle from '../RitmStyle/RitmStyle';
import Price from '../Price/Price';
import Hading from '../Hadding/Hading';




const Main = () => {
  const { main__block, main__subtitle, left, subtitle_content, right, main__title,
    title_content } = styles;
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
        <Hading>Сеансы RitmStyle</Hading>
        <Grid />
        <Hading>Отзывы</Hading>
      </section>
      <section>
        <SimpleCarousel />
        <Hading>Об RitmStyle</Hading>
        <RitmStyle />
        <Hading>Стоимость сеансов</Hading>
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