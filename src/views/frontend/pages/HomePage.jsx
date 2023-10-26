import Header from "../global/header/Header";
import Footer from "../global/footer/Footer";
// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  return (
    <>
      <Header />

      <section className="banner">
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay, Parallax]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          parallax={true}
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect="fade"
        >
          <SwiperSlide className="banner-slider">
          <div className="banner-box ">
                <div className="banner-col container d-flex">
                    <div className="banner-text ">
                        <h5 className="sub-heading">Lorem Ipsum</h5>
                        <h1>We Are A Strategic
                            Creative Agency.
                        </h1>
                        <a href="#" className="arrow-btn defbtn">
                            Request A Callback
                        </a>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
