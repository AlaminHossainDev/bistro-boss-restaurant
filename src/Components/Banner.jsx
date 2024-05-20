import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../src/assets/banner/01.jpg";
import img2 from "../../src/assets/banner/02.jpg";
import img3 from "../../src/assets/banner/03.png";
import img4 from "../../src/assets/banner/04.jpg";
import img5 from "../../src/assets/banner/05.png";
import img6 from "../../src/assets/banner/06.png";
import img7 from "../../src/assets/banner/banner.jpg";

import "../custom.css";

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true}
        showThumbs={true} // Show thumbnails
        thumbWidth={100} // Thumbnail width (adjust as needed)
      >
        <div>
          <img src={img1} alt="Banner 1" />
        </div>
        <div>
          <img src={img2} alt="Banner 2" />
        </div>
        <div>
          <img src={img3} alt="Banner 3" />
        </div>
        <div>
          <img src={img4} alt="Banner 4" />
        </div>
        <div>
          <img src={img5} alt="Banner 5" />
        </div>
        <div>
          <img src={img6} alt="Banner 6" />
        </div>
        <div>
          <img src={img7} alt="Banner 7" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
