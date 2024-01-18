import jsonData from "../../JSON_files/testimonials_data.json";

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
          <h5 className="sub-heading sub-hd">Not Convinced?</h5>
          <h2 className="bigheading">
            Check Out What Our Clients Want To Say!
          </h2>
          <p>
            These are the genuine experiences of our clients regarding Adaired's
            digital marketing services. The service quality
            <br/> and client satisfaction we focus on define our unwavering
            commitment and make us the most trusted digital marketing company.
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1240: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="review-slider mt50 mb-50"
          >
            {jsonData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="review-col">
                    <div className="user-details d-flex just-start gap-20">
                    {data.image ? (
                        <img src={data.image} alt={data.name} />
                      ) : (
                        <div className="initial-avatar">
                          {data.name[0].toUpperCase()}
                        </div>
                      )}
                      <div className="review-hd">
                        <h4>{data.name}</h4>
                        <span>{data.designation}</span>
                      </div>
                    </div>
                    <div className="review-text mt25">
                      <p>{data.description}</p>
                    </div>
                    <div className="rating-star mt25">
                      <img src="/public/assets/images/homePage/rating-star.svg" />
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
