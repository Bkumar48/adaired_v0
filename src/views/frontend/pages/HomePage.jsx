import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import { useEffect, useRef } from "react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { A11y, Autoplay, Parallax } from "swiper/modules";

// Import Framer Motion
import { motion } from "framer-motion";



const HomePage = () => {

  return (
    <>
      <section className="banner">
        <Swiper
          modules={[A11y, Parallax]}
          spaceBetween={0}
          slidesPerView={1}
          // loop={true}
          className="banner_slider-wrap-horizontal"
          // draggable={true}
          // direction="horizontal"
          // autoplay={"false"}
        >
          <SwiperSlide>
            {" "}
            <Swiper
              modules={[A11y, Autoplay, Parallax]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                reverseDirection: true,
              }}
              parallax={true}
              loop={true}
              direction="vertical"
              speed={2000}
              className="banner-slider-wrap"
              allowTouchMove={false}
            >
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <Swiper
              modules={[A11y, Autoplay, Parallax]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                reverseDirection: true,
              }}
              parallax={true}
              loop={true}
              direction="vertical"
              speed={2000}
              className="banner-slider-wrap"
              allowTouchMove={false}
            >
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <Swiper
              modules={[A11y, Autoplay, Parallax]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                reverseDirection: true,
              }}
              parallax={true}
              loop={true}
              direction="vertical"
              speed={2000}
              className="banner-slider-wrap"
              allowTouchMove={false}
            >
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner-slider">
                <div className="banner-box ">
                  <div className="banner-col container d-flex">
                    <div className="banner-text ">
                      <h5 className="sub-heading">Lorem Ipsum</h5>
                      <h1>We Are A Strategic Creative Agency.</h1>
                      <a href="#" className="arrow-btn defbtn">
                        Request A Callback
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>

        <div className="social-icon">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M19.7998 31.6801H12.4078V19.6681H7.65576V12.5401H12.4078V9.90008C12.4078 6.86408 13.1998 4.62008 14.9158 3.16808C16.8958 1.45208 20.0638 0.924082 24.5518 1.58408L25.3438 1.71608V8.18408H21.3838C20.3278 8.18408 19.9318 8.44808 19.9318 9.90008V12.5401H25.3438L24.4198 19.6681H19.7998V31.6801ZM14.1238 29.9641H18.0838V17.9521H22.8358L23.2318 14.2561H18.0838V9.90008C18.0838 7.65608 19.1398 6.46808 21.2518 6.46808H23.4958V3.16808C19.9318 2.64008 17.4238 3.16808 15.9718 4.35608C14.6518 5.41208 13.9918 7.26008 13.9918 9.76808V14.1241H9.37176V17.8201H14.1238V29.9641Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M22.0441 30.3599H10.9561C6.33614 30.3599 2.64014 26.6639 2.64014 22.0439V10.9559C2.64014 6.33589 6.33614 2.63989 10.9561 2.63989H22.0441C26.6641 2.63989 30.3601 6.33589 30.3601 10.9559V22.0439C30.3601 26.6639 26.6641 30.3599 22.0441 30.3599ZM10.9561 4.22389C7.26014 4.22389 4.22414 7.25989 4.22414 10.9559V22.0439C4.22414 25.7399 7.26014 28.7759 10.9561 28.7759H22.0441C25.7401 28.7759 28.7761 25.7399 28.7761 22.0439V10.9559C28.7761 7.25989 25.7401 4.22389 22.0441 4.22389H10.9561Z"
                fill="white"
              />
              <path
                d="M16.4999 23.0999C12.8039 23.0999 9.8999 20.0639 9.8999 16.4999C9.8999 12.9359 12.9359 9.8999 16.4999 9.8999C20.1959 9.8999 23.0999 12.9359 23.0999 16.4999C23.2319 20.1959 20.1959 23.0999 16.4999 23.0999ZM16.4999 11.3519C13.7279 11.3519 11.3519 13.5959 11.3519 16.4999C11.3519 19.4039 13.5959 21.6479 16.4999 21.6479C19.4039 21.6479 21.6479 19.4039 21.6479 16.4999C21.6479 13.7279 19.2719 11.3519 16.4999 11.3519Z"
                fill="white"
              />
              <path
                d="M24.1559 10.296C23.3639 10.296 22.8359 9.63601 22.8359 8.97601C22.8359 8.31601 23.4959 7.65601 24.1559 7.65601C24.8159 7.65601 25.4759 8.31601 25.4759 8.97601C25.4759 9.63601 24.9479 10.296 24.1559 10.296ZM24.1559 8.71201C24.0239 8.71201 24.0239 8.84401 24.0239 8.84401C24.0239 9.10801 24.4199 9.10801 24.4199 8.84401C24.4199 8.84401 24.2879 8.71201 24.1559 8.71201Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M11.8311 28.3377C8.79514 28.3377 5.75914 27.4137 3.11914 25.8297H2.98714L2.72314 25.3017L2.85514 24.7737L3.38314 24.5097H3.64714C5.89114 24.7737 8.00314 24.2457 9.85114 23.1897C8.00314 22.6617 6.41914 21.2097 5.75914 19.2297V19.0977V18.8337C5.75914 18.5697 6.02314 18.4377 6.15514 18.3057C4.57114 17.1177 3.64714 15.2697 3.64714 13.2897V13.1577L3.91114 12.7617L4.43914 12.4977L4.70314 12.6297C3.51514 10.7817 3.38314 8.14172 4.43914 6.16172L4.57114 6.02972L5.09914 5.50172L5.62714 6.02972C8.13514 9.19772 11.8311 11.1777 15.9231 11.5737C15.7911 9.85772 16.4511 8.00972 17.6391 6.68972C18.8271 5.50172 20.4111 4.84172 21.9951 4.70972C23.7111 4.70972 25.2951 5.23772 26.4831 6.42572C27.4071 6.16172 28.3311 5.89772 29.2551 5.50172H29.5191L30.1791 5.36972L30.3111 6.02972C30.5751 7.87772 29.9151 9.85772 28.4631 11.0457C28.5951 14.3457 27.6711 17.6457 25.9551 20.4177C23.5791 24.1137 19.8831 26.7537 15.5271 27.6777C14.3391 28.2057 13.0191 28.3377 11.8311 28.3377ZM5.89114 25.6977C8.79515 26.8857 11.9631 27.2817 15.1311 26.4897C19.0911 25.5657 22.5231 23.1897 24.6351 19.7577C26.3511 17.1177 27.1431 14.0817 27.0111 11.0457C27.0111 10.6497 27.1431 10.3857 27.4071 10.1217C28.3311 9.32972 28.8591 8.14172 28.9911 6.95372C28.1991 7.21772 27.5391 7.48172 26.7471 7.61372C26.3511 7.61372 25.8231 7.61372 25.5591 7.21772C24.6351 6.29372 23.3151 5.76572 21.9951 5.89772C20.6751 5.89772 19.4871 6.42572 18.5631 7.48172C17.5071 8.66972 16.9791 10.2537 17.2431 11.8377C17.3751 12.2337 16.9791 12.7617 16.5831 12.7617H16.4511H16.3191C12.0951 12.4977 8.00314 10.6497 5.09914 7.48172C4.70314 9.59372 5.23114 11.8377 6.94714 13.0257C7.34314 13.2897 7.34314 13.8177 7.07914 14.2137C6.94714 14.4777 6.68314 14.4777 6.41914 14.4777C6.02314 14.4777 5.62714 14.3457 5.09914 14.2137C5.49514 16.0617 6.81515 17.5137 8.79515 18.0417L9.45515 18.1737L9.32314 18.9657C9.19114 19.2297 9.05915 19.3617 8.79515 19.4937C8.26715 19.4937 7.87115 19.6257 7.34314 19.6257C8.13515 21.0777 9.71914 22.0017 11.3031 22.1337C11.6991 22.1337 11.9631 22.5297 11.9631 22.9257V23.1897L11.6991 23.4537C10.1151 24.6417 8.00314 25.4337 5.89114 25.6977Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="manage-grid pad100">

        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay, Parallax]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 30000000 }}
          parallax={true}
          loop={true}
        >
          <SwiperSlide>
            <div className="container text-center">
              <h2 className="bigheading">Social Media Management</h2>
              <div className="splash-box">
              <span id="splash-overlay" className="splash-left"></span>
              <div className=" z-depth-4 mike-img"  id="welcome" >
                <img src="assets/images/services_slider_icon.png" />
              </div>
              <span id="splash-overlay" className="splash-right"></span>
              </div>
              <p className="big-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container text-center">
              <h2 className="bigheading">Social Media Management</h2>
              <div className="splash-box">
              <span id="splash-overlay" className="splash-left"></span>
              <div className=" z-depth-4 mike-img"  id="welcome" >
                <img src="assets/images/services_slider_icon.png" />
              </div>
              <span id="splash-overlay" className="splash-right"></span>
              </div>
              <p className="big-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </section>

      <section className="about-outer pb100">
        <div className="container d-flex">
          <div className="w-50">
            <div className="about-slider">
              <div className="abt-img_big">
                <img src="assets/images/big-image_ceo.jpg" alt="img" />
                <img
                  className="short-img"
                  src="assets/images/ceo_sir-img.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div className="abt-text w-50">
            <h5 className="sub-heading sub-hd">About Us</h5>
            <h2 className="bigheading">A Company Obsessed With ROI</h2>
            <p>
              Adaired is a multi-service digital marketing firm that has a
              qualified team of professionals to help you get noticed online.
              Our marketing solutions cater to many needs of our clients helping
              them grow online, increase exposure, and ultimately become the
              leader in the industry. What started as a small business, Adaired
              has now grown into a successful leading marketing agency helping
              businesses thrive online, worldwide.
            </p>
            <div className="abt-card-group d-flex gap-20 mt25">
              <div className="abt-card">
                <img className="abt-icon" src="assets/images/tick_svg.svg" />
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeset
                  indstry. Lorem Ipsum has been the industry's standard text 123
                  dummy text .
                </p>
              </div>
              <div className="abt-card">
                <img className="abt-icon" src="assets/images/tick_svg.svg" />
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeset
                  indstry. Lorem Ipsum has been the industry's standard text 123
                  dummy text .
                </p>
              </div>
            </div>
            <p className="cursive-para">
              "The internet is becoming the town square for the global village
              of tomorrow." -<i>Bill Gates</i>
            </p>
            <a href="#" className="mt25 arrow-btn defbtn">
              View More Information
            </a>
          </div>
        </div>
      </section>

      <section className="trusted-outer pad100">
        <div className="container text-center">
          <h2 className="bigheading">Trusted By:</h2>
          <p>
            We work with businesses that want to engage better, dominate SERPs,
            and achieve more than just website traffic.
          </p>
          <Swiper
            modules={[A11y, Autoplay, Parallax]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{ delay: 1000 }}
            parallax={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="trust-slider mt50"
          >
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (1).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (2).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (3).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (4).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (5).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (6).png" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#" className="trust-icon">
                <img src="assets/images/trust-icon (6).png" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="service-outer pad100">
        <div className="container">
          <div className="text-center">
            <h4 className="min-heading">Our Services</h4>
            <h2 className="bigheading">What We Offer</h2>
            <p>
              Whatever service we provide, we give a thought about every small
              detail. Our main motive is brand growth and this is what leaves a
              mark on every customer.
            </p>
          </div>
          <div className="service-grid d-flex wrap-flex mt50">
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (1).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Organic Growth (SEO)</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (2).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Paid Media & Advertising (PPC)</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (3).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Web Development & Redesign</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (4).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Compelling Content Marketing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (4).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Digital Creative & Logo Design</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
            <div className="serv-card">
              <div className="serv-img">
                <img src="assets/images/serv-img (1).jpg" />
              </div>
              <div className="serv-content">
                <img
                  className="serv-icon"
                  src="assets/images/services_cards_tick.svg"
                />
                <h3 className="hd-block">Strategic Social Media Management</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the text printing and
                  typesetting industry. Lorem has been the industry's dummy
                  text.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social Media Marketing </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study pad100">
        <div className="study_slider">
          <Swiper
            modules={[A11y, Autoplay, Parallax]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            parallax={true}
            loop={true}
          >
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Lorem Ipsum</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the text printing and
                    typesetting industry. Lorem has been the industry's dummy
                    text.
                  </p>
                  <a href="#" className="mt25 arrow-btn defbtn">
                    View More
                  </a>
                </div>
                <div className="w-50">
                  <img src="assets/images/laptop.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Lorem Ipsum</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the text printing and
                    typesetting industry. Lorem has been the industry's dummy
                    text.
                  </p>
                  <a href="#" className="mt25 arrow-btn defbtn">
                    View More
                  </a>
                </div>
                <div className="w-50">
                  <img src="assets/images/laptop.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Lorem Ipsum</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the text printing and
                    typesetting industry. Lorem has been the industry's dummy
                    text.
                  </p>
                  <a href="#" className="mt25 arrow-btn defbtn">
                    View More
                  </a>
                </div>
                <div className="w-50">
                  <img src="assets/images/laptop.png" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="grow-grid pad100">
        <div className="container d-flex align-start">
          <div className="growth-img w-50">
            <img
              className="grow_single-img"
              src="assets/images/growth-img.jpg"
            />
            <img className="team-img" src="assets/images/team-img.png" />
          </div>
          <div className="grow-text w-50 pl60">
            <h4 className="sub-hd">ABOUT US</h4>
            <h2 className="main-hedaing">Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the.
            </p>
            <ul className="half-list d-flex wrap-flex">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <p className="pink-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <a href="#" className="defbtn mt25 arrow-btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="rewards_outer pb100">
        <Swiper
          modules={[A11y, Autoplay, Parallax]}
          spaceBetween={0}
          slidesPerView={7}
          autoplay={{ delay: 1000 }}
          parallax={true}
          loop={true}
          className="container d-flex"
        >
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (1).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (7).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (6).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (5).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (4).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (3).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (2).png" />
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <img src="assets/images/reward (2).png" />
          </SwiperSlide>
        </Swiper>
      </section>

      <Testimonials />

      <Blogs />

      <section className="contact-grid pb100">
        <div className="container d-flex align-start">
          <div className="cont-text w-50">
            <h2 className="bigheading">Lorem Ipsum Is Simply Text</h2>
            <p>Let's Talk And Get Started</p>
            <div className="social-cont">
              <a href="#" className="d-flex just-start gap-20">
                <img src="assets/images/conticon (2).png" />
                <p>
                  Mail Id Of Sales Executive
                  <strong>Salesadaired@gmail.com</strong>
                </p>
              </a>
              <a href="#" className="d-flex just-start gap-20">
                <img src="assets/images/conticon (1).png" />
                <p>
                  Our Skpe ID
                  <strong>adaireddigital</strong>
                </p>
              </a>
            </div>
            <h2 className="bigheading mt25">& What you will get:</h2>
            <ul>
              <li>On-call inquiry assistance</li>
              <li>Project consulting by experts</li>
              <li>Detailed project estimation</li>
            </ul>
          </div>
          <div className="home-form w-50">
            <form>
              <input className="half-col" type="text" placeholder="Name" />
              <input className="half-col" type="email" placeholder="Email" />
              <input className="half-col" type="tel" placeholder="Phone No." />
              <select className="serv__select half-col" name="service">
                <option>Interested</option>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
              </select>
              <select className="serv__select full-col" name="service">
                <option>Budget</option>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
              </select>
              <label htmlFor="textarea">Message</label>
              <textarea className="full-col" rows="8"></textarea>
              <div className="checkbox full-col">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1">
                  Lorem Ipsum is simply dummy text of the printing.
                </label>
              </div>
              <button type="submit" className="submit defbtn arrow-btn">
                Send Your Inquiry
                {/* <img src="image/right-arrow.png" />  */}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
