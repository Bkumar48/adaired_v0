import { Link } from "react-router-dom";
import React, { lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Testimonials from "../../components/testimonialsSection/Testimonials";
import Blogs from "../../components/blogSection/Blogs";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { A11y, Autoplay, Parallax } from "swiper/modules";

const ManageGrid = React.memo(() => {
  return (
    <>
      <section className="manage-grid pad100">
        <div className="container text-center">
          <h2 className="bigheading">
            Digital Marketing Services for The Most Ambitious Enterprises
          </h2>
          <div className="splash-box">
            <span id="splash-overlay" className="splash-left"></span>
            <div className="z-depth-4 mike-img" id="welcome">
              <img src="assets/images/services_slider_icon.png" />
            </div>
            <span id="splash-overlay" className="splash-right"></span>
          </div>
          <p className="big-para">
            We work with businesses that want to engage better, dominate SERPs,
            and achieve more than just website traffic.
          </p>
        </div>
      </section>
    </>
  );
});
ManageGrid.displayName = "ManageGrid";

const AboutSection = React.memo(() => {
  const imageSrc = [
    "assets/images/big-image_ceo.jpg",
    "assets/images/ceo_sir-img.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [animate, setAnimate] = useState(false);

  const handleNextImage = () => {
    setAnimate(true);
    setCurrentImage(nextImage);
    setNextImage((nextImage + 1) % imageSrc.length);
  };

  const variants = {
    backgroundInitial: {
      x: "100%",
      y: "100%",
    },
    backgroundAnimate: {
      x: "0%",
      y: "0%",
    },
    backgroundExit: {
      x: "-100%",
      y: "100%",
    },
  };

  return (
    <>
      <motion.section className="about-outer pb100">
        <motion.div className="container d-flex">
          <AnimatePresence>
            <motion.div className="w-50">
              <motion.div className="about-slider">
                {/* <DiagonalSlider /> */}
                <motion.div
                  variants={variants}
                  initial={animate ? "backgroundInitial" : "backgroundAnimate"}
                  animate={animate ? "backgroundAnimate" : "backgroundInitial"}
                  exit={animate ? "backgroundExit" : "backgroundAnimate"}
                  className="about-slider__background_image"
                >
                  <motion.img src={imageSrc[currentImage]} />
                </motion.div>
                
                <motion.div
                  initial={{ x: 200, y: 400 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  exit={{ x: -200, y: 400 }}
                  className="about-slider__slide_image"
                >
                  <motion.img src={imageSrc[nextImage]} />
                </motion.div>
              </motion.div>
              <button onClick={handleNextImage}> Next Slide</button>
            </motion.div>
          </AnimatePresence>

          <div className="abt-text w-50">
            <h5 className="sub-heading sub-hd">About Us</h5>
            <h2 className="bigheading">A Company Obsessed With ROI</h2>
            <p>
              Transform your marketing outcomes and experience exponential ROI
              growth by partnering with Adaired! We offer smart, targeted,
              integrated campaigns that drive traffic, build engagement,
              generate conversions, and foster long-term relationships. Our
              online marketing services will turn your website into a
              lead-generating machine, and our ongoing efforts will bring in
              more clients than you can handle.
            </p>
            <div className="abt-card-group d-flex gap-20 mt25">
              <div className="abt-card">
                <img className="abt-icon" src="assets/images/tick_svg.svg" />
                <h4>Tailored Approach</h4>
                <p>
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div className="abt-card">
                <img className="abt-icon" src="assets/images/tick_svg.svg" />
                <h4>Tangible Results</h4>
                <p>
                  Experience transparency in your marketing endeavors with
                  Adaired. As your brand gains momentum, the ROI translates into
                  measurable success for your business.
                </p>
              </div>
            </div>
            <p className="cursive-para">
              "Your brand is what people say about you when you're not in the
              room." -<i>Jeff Bezos</i>
            </p>
            <a href="#" className="mt25 arrow-btn defbtn">
              View More Information
            </a>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
});
AboutSection.displayName = "AboutSection";

const TrustedBy = React.memo(() => {
  return (
    <>
      <section className="trusted-outer pad100">
        <div className="container text-center">
          <h2 className="bigheading">Trusted By:</h2>
          <p>
            The success of our clients is what determines our success. <br />
            Below are a few of our favorite clients who we have worked for; we
            have reserved a spot for you!
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
    </>
  );
});
TrustedBy.displayName = "TrustedBy";

const Services = React.memo(() => {
  return (
    <>
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
                <h3 className="hd-block">Website Design & Development</h3>
                <p>
                  Website Design and development services that deliver exquisite
                  design, a user-friendly interface, and robust functionality
                  for lasting impressions on the audience.
                </p>
                <ul>
                  <li>PHP Development</li>
                  <li>Website management</li>
                  <li>Website CMS migrations</li>
                  <li>WordPress design & development</li>
                  <li>Landing page design & development</li>
                  <li>E-commerce website design & development </li>
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
                <h3 className="hd-block">Social Media Management</h3>
                <p>
                  Enhance the social media presence of brands on diverse social
                  platforms with engaging content to foster meaningful
                  interactions and amplify reach.
                </p>
                <ul>
                  <li>Profile Optimization</li>
                  <li>Targeted Page Likes</li>
                  <li>Targeted Page Likes</li>
                  <li>Hashtag Trend Research</li>
                  <li>Content Calendar</li>
                  <li>Monthly Report</li>
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
                <h3 className="hd-block">Content Development & Marketing</h3>
                <p>
                  Engaging and captivating content development that not only
                  resonates with the audience but ranks well across all search
                  engines.
                </p>
                <ul>
                  <li>Infographics</li>
                  <li>Website Blogs</li>
                  <li>Press Releases</li>
                  <li>Website Copy</li>
                  <li>Guest Posting</li>
                  <li>Social Media Posting </li>
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
                <h3 className="hd-block">Graphic Designing</h3>
                <p>
                  The creative team illustrates the brand's image and ideas in
                  captivating visuals to communicate with the target audience.
                </p>
                <ul>
                  <li>Digital Broucher</li>
                  <li>Email Marketing Graphics</li>
                  <li>Logos and Branded Elements</li>
                  <li>Poster , Banner and Signage</li>
                  <li>Business Card, Letterhead and Envelope</li>
                  <li>Social media graphics & digital marketing ads </li>
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
                <h3 className="hd-block">Search engine optimization</h3>
                <p>
                  Launch and maintain the websites on top of search results to
                  enhance your online visibility with tried and tested Search
                  Engine Optimization (SEO) services.
                </p>
                <ul>
                  <li>Meta Tags Optimization</li>
                  <li>Google tags Setup</li>
                  <li>Schema Optimization</li>
                  <li>Website Layout Optimization</li>
                  <li>Website Broken Link Analysis</li>
                  <li>Penalty review & recovery </li>
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
                <h3 className="hd-block">Pay Per Click</h3>
                <p>
                  Building strategic ad campaigns and carrying data-driven
                  optimizations to drive targeted traffic with our Pay-Per-Click
                  (PPC) solutions.
                </p>
                <ul>
                  <li>Social Ads</li>
                  <li>Google Ads</li>
                  <li>Conversion Tracking</li>
                  <li>Google Analytics set up</li>
                  <li>Overall performance Analysis</li>
                  <li>Campaign management and optimization </li>
                </ul>
                <a href="#" className="arrow-btn defbtn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
Services.displayName = "Services";

const CaseStudy = React.memo(() => {
  return (
    <>
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
                  <h5 className="sub-heading sub-hd">Results that speak!</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    When we provide you with the best Digital Marketing
                    Services, we mean it. Check out the results we have
                    successfully fetched for our clients.
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
                  <h5 className="sub-heading sub-hd">Results that speak!</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    When we provide you with the best Digital Marketing
                    Services, we mean it. Check out the results we have
                    successfully fetched for our clients.
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
                  <h5 className="sub-heading sub-hd">Results that speak!</h5>
                  <h2 className="bigheading">Case Studies </h2>
                  <p>
                    When we provide you with the best Digital Marketing
                    Services, we mean it. Check out the results we have
                    successfully fetched for our clients.
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
    </>
  );
});
CaseStudy.displayName = "CaseStudy";

const Growth = React.memo(() => {
  return (
    <>
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
            <h2 className="main-hedaing">
              Digital Marketing Experts Dedicated To Your Growth
            </h2>
            <p>
              Adaired has helped numerous companies develop their brands with
              its digital marketing services worldwide. We understand the
              importance of leads, sales, and return on investment when it comes
              to digital marketing. Our clients come from all industries of
              every size.
            </p>
            <ul className="half-list d-flex wrap-flex">
              <li>Comprehensive Services</li>
              <li>Industry Expertise</li>
              <li>Client-Centric Approach</li>
              <li>Tailored Solutions</li>
            </ul>
            <p>
              Our digital marketing agency provides a wide range of services,
              from initial brand development to a globally syndicated
              advertising campaign, all of which are customized to meet the
              unique needs of our clients.
            </p>
            <p className="pink-para">
              We strive to surpass your expectations, providing unparalleled
              quality in our online marketing services.
            </p>
            <a href="#" className="defbtn mt25 arrow-btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
});
Growth.displayName = "Growth";

const Rewards = React.memo(() => {
  return (
    <>
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
    </>
  );
});
Rewards.displayName = "Rewards";

const ContactUs = React.memo(() => {
  return (
    <>
      <section className="contact-grid pb100">
        <div className="container d-flex align-start">
          <div className="cont-text w-50">
            <h2 className="bigheading">Ready To Win More Customers?</h2>
            <p>
              Connect for more website traffic, qualified leads, and an
              established online brand image.
            </p>
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
});
ContactUs.displayName = "ContactUs";

const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <ManageGrid />
      <AboutSection />
      <TrustedBy />
      <Services />
      <CaseStudy />
      <Growth />
      <Rewards />
      <Testimonials />
      <Blogs limit={3} viewMoreBtn={true} />
      <ContactUs />
    </>
  );
};

export default HomePage;
