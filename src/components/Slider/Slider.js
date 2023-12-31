import "./Slider.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="slider__pro" {...settings}>
      <div>
        <div className="big__slider">
          <h4>Александра Дмитриева</h4>
          <p className="slider__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur nulla viverra egestas
            tellus. Cursus scelerisque phasellus netus proin. Etiam mauris maecenas facilisis faucibus
            mauris eleifend purus. Purus dictum vulputate elementum mauris amet.
            Hendrerit sit cras ullamcorper morbi quam vitae ante nibh. Ornare ipsum mi nisl augue
            placerat lacus. Dolor ipsum fermentum viverra bibendum faucibus urna. Arcu, ut sed tellus
            lacus quisque diam. Semper sed aenean in etiam mus praesent diam semper in. Pretium id a
            amet, massa ligula nibh faucibus ornare. Ut aenean rhoncus sed nam ut diam dapibus. Risus
            nibh faucibus eu vestibulum tempor, quis ultrices mauris. Porta enim, donec odio sagittis,
            eget velit at. </p>
        </div>
      </div>
      <div>
        <div className="big__slider">
          <h4>Кира Иванова</h4>
          <p className="slider__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla
            dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent
            nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat
            vestibulum a lectus sed blandit.
            Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum
            phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris
            potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper
            sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
            nam nulla pulvinar mauris vel lacinia venenatis. </p>
        </div>
      </div>
      <div>
        <div className="big__slider">
          <h4>Яна Жернова</h4>
          <p className="slider__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia eget mattis orci aliquam
            enim tincidunt gravida aliquet ut. Ipsum vulputate morbi felis, lobortis tincidunt. Pretium
            dictum odio feugiat auctor diam sit viverra gravida. Lobortis arcu rhoncus, mi mi vitae
            feugiat amet, vitae ac. Cursus diam turpis iaculis nisi sit. Vel blandit et sit elit
            vestibulum feugiat proin tempor, justo. Diam commodo, pellentesque at porttitor tristique
            faucibus faucibus morbi. Bibendum pretium lacus, tempus viverra vitae odio nunc eget.
            Tortor fermentum orci neque sed. Mauris faucibus diam lorem erat ullamcorper donec egestas
            neque. Maecenas malesuada mauris magnis sed id. Luctus vitae justo, in consectetur arcu.
            Nulla feugiat at eu in aliquet. Diam nunc, libero mauris tellus suspendisse morbi sagittis
            semper. </p>
        </div>
      </div>
    </Slider>
  );
};

export default SimpleCarousel;