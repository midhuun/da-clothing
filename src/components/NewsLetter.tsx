import Slide1 from "../assets/organic_rep.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Womens from "../assets/womens.webp";
import Mens from "../assets/mens.webp";
const NewsLetter = () => {

  return (
    <div className="w-full flex justify-center items-center  ">
    <Carousel autoPlay 
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false} >
        <img
          className="h-100px object-cover object-top   md:flex h-[250px] md:h-[650px]"
          srcSet={`${Mens} 650w`}
          loading="lazy"
          alt=""
        />
        <img
          className="h-200px object-top object-cover  h-[250px] lg:flex md:h-[650px]"
          srcSet={`${Womens} 650w`}
           loading="lazy"
          alt=""
        />
        <img
          className="h-100px  object-cover h-[250px] md:h-[650px]"
          srcSet={`${Slide1} 650w`}
           loading="lazy"
          alt=""
        />
      </Carousel>  
    </div>
  );
};

export default NewsLetter;
