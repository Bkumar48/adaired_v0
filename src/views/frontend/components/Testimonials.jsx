import jsonData from "../JSON_files/testimonials_data.json";

import { A11y, Autoplay, Navigation, Parallax } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <>
      <section className="review-grid pad100">
        <div className="container">
          <h5 className="sub-heading sub-hd">Testimonials</h5>
          <h2 className="bigheading">Check What Our Clients Say!</h2>
          <p>
            We proudly employ the Industries most dedicated individuals, who are
            all professionally
            <br />
            trained to Roofin service standards.
          </p>
          <Swiper
            modules={[A11y, Autoplay, Parallax, Navigation]}
            spaceBetween={100}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            parallax={true}
            loop={true}
            navigation={{
              nextEl: ".testimonials__button--n",
              prevEl: ".testimonials__button--p",
              clickable: true,
            }}
            className="review-slider mt50"
          >
            {jsonData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="review-col">
                    <div className="user-details d-flex just-start gap-30">
                      <img src={data.image} />
                      <div className="review-hd">
                        <h4>{data.name}</h4>
                        <span>{data.designation}</span>
                      </div>
                    </div>
                    <div className="review-text mt25">
                      <p>{data.description}</p>
                    </div>
                    <div className="rating-star">
                      {/* <img src="image/rating.png" /> */}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="testimonials__buttons">
            <div className="testimonials__button testimonials__button--p">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="testimonials__button-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </div>
            <div className="testimonials__button testimonials__button--n">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="testimonials__button-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
