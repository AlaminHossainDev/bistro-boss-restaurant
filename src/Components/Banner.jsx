import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../../src/assets/banner/01.jpg'
import img2 from '../../src/assets/banner/02.jpg'
import img3 from '../../src/assets/banner/03.png'
import img4 from '../../src/assets/banner/04.jpg'
import img5 from '../../src/assets/banner/05.png'
import img6 from '../../src/assets/banner/06.png'
import img7 from '../../src/assets/banner/banner.jpg'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={img6} />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={img7} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
