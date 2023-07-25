import { Carousel } from 'antd';
import newslide1 from '../images/newslide1.jpg'
import slide3 from '../images/slide3.webp'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'

const contentStyle = {
  height: '390px',
  color: '#fff',
  background: 'white',
  lineHeight: '460px',
  paddingBottom: '0px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
  objectFit: 'fill',
  objectPosition: 'center', // Adjust the image position within its container
  margin: '0 auto',

};


const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <img src={newslide1} alt='slide 6' style={contentStyle} ></img>
    </div>
    <div>
      <img src={slide3} alt='slide 3' style={contentStyle}></img>
    </div>
    <div>
      <img src={slide4} alt='slide 4' style={contentStyle}></img>
    </div>
    <div>
      <img src={slide5} alt='slide 5' style={contentStyle}></img>
    </div>
  </Carousel>
);
export default HomeCarousel;