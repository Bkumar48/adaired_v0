import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useAnimation,
} from "framer-motion";
import Button from "../../components/buttonComponent/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Testimonials from "../../components/testimonialsSection/Testimonials";
import Blogs from "../../components/blogSection/Blogs";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { A11y, Autoplay, Parallax } from "swiper/modules";
import DiagonalSlider from "../../components/diagonalSlider/DiagonalSlider";

const ManageGrid = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const variants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    splashLeftInitial: {
      x: "-100%",
    },

    splashRightInitial: {
      x: "100%",
    },
    splashLeftAnimate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },

    splashRightAnimate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="manage-grid pad100" ref={ref}>
        <AnimatePresence>
          <motion.div
            className="splash-left"
            variants={variants}
            initial={isInView ? "splashLeftInitial" : "splashLeftInitial"}
            animate={isInView ? "splashLeftAnimate" : "exit"}
            transition={{
              duration: 0.8,
            }}
            exit={"ballExit"}
            key="leftSplash"
          >
            <motion.img src="assets/images/left_splash-img.png" />
          </motion.div>

          <div className="ambitious-col container text-center">
            <h2 className="bigheading">
              Digital Marketing Services for The Most Ambitious Enterprises
            </h2>
            <div className="splash-box">
              <div className="mike-img">
                <img src="assets/images/services_slider_icon.png" />
              </div>
            </div>
            <p className="big-para">
              We work with businesses that want to engage better, dominate
              SERPs, and achieve more than just website traffic.
            </p>
          </div>
          <motion.div
            className="splash-right"
            variants={variants}
            initial={isInView ? "splashRightInitial" : "splashRightInitial"}
            animate={isInView ? "splashRightAnimate" : "exit"}
            transition={{
              duration: 0.8,
            }}
            exit={"ballExit"}
            key="rightSplash"
          >
            <motion.img src="assets/images/right_splash-img.png" />
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
});
ManageGrid.displayName = "ManageGrid";

const AboutSection = React.memo(() => {
  const sliderVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };
  const textVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.section className="about-outer pb100">
        <motion.div
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="container d-flex"
        >
          <motion.div
            style={{
              transition: "none",
            }}
            variants={sliderVariants}
            className="w-50 about__slider-wrapper"
          >
            <motion.div className="about__slider">
              <AnimatePresence>
                <DiagonalSlider />
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              transition: "none",
            }}
            variants={textVariants}
            className="abt-text w-50"
          >
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
                <img
                  className="abt-icon"
                  src="/src/assets/images/Tailored Approach-1.svg"
                />
                <h4>Tailored Approach</h4>
                <p>
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div className="abt-card">
                <img
                  className="abt-icon"
                  src="/src/assets/images/Tangible Results-2.svg"
                />
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

            <Button
              title="View More Information"
              type="button"
              svgBackgroundColor="#F89520"
              icon="solar:arrow-right-broken"
              navigateTo="/about"
              className="mt25"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
});
AboutSection.displayName = "AboutSection";

const TrustedBy = React.memo(() => {
  const Icons = {
    1: "assets/images/trust-icon_1.png",
    2: "assets/images/trust-icon_2.png",
    3: "assets/images/trust-icon_3.png",
    4: "assets/images/trust-icon_4.png",
    5: "assets/images/trust-icon_5.png",
    6: "assets/images/trust-icon_6.png",
    7: "assets/images/trust-icon_7.png",
    8: "assets/images/trust-icon_8.png",
    9: "assets/images/trust-icon_9.png",
    10: "assets/images/trust-icon_10.png",
    11: "assets/images/trust-icon_11.png",
    12: "assets/images/trust-icon_12.png",
  };

  // const controls = useAnimation();

  // useEffect(() => {
  //   // If a user hasn't opted in for reduced motion, then we add the animation
  //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     addAnimation();
  //   }
  // }, []);

  // const addAnimation = async () => {
  //   // Trigger the animation
  //   controls.start({
  //     x: ["0%", "-150%"], // Adjust the values based on your design
  //     transition: {
  //       x: {
  //         duration: 40, // Set your desired animation duration
  //         ease: "linear",
  //         repeat: Infinity,
  //         repeatType: "loop",
  //       },
  //     },
  //     onComplete: () => {
  //       // Reset the position to the starting point when the animation completes
  //       controls.start({ x: "-50%", transition: { duration: 0 } });
  //     },
  //   });
  // };

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="trusted-outer pad50-50">
        <motion.div
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="container text-center"
        >
          <motion.div variants={variants}>
            <motion.h2 className="bigheading">Trusted By:</motion.h2>
          </motion.div>

          <motion.div
            variants={variants}
            className=""
            style={{
              padding: "15px 0 0 0 ",
            }}
          >
            {" "}
            <motion.p>
              The success of our clients is what determines our success. <br />
              Below are a few of our favorite clients who we have worked for; we
              have reserved a spot for you!
            </motion.p>
          </motion.div>

          <motion.div variants={variants} className="trust-slider-outer">
            <Swiper
              modules={[A11y, Autoplay, Parallax]}
              spaceBetween={20}
              slidesPerView={6}
              autoplay={{ delay: 2000 }}
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
              {Object.keys(Icons).map((key, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to="#" className="trust-icon">
                      <motion.img
                        style={{ filter: "grayscale(1)" }}
                        whileHover={{ filter: "grayscale(0)" }}
                        src={Icons[key]}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>

          {/* <motion.div
            className="scroller"
            data-speed="slow"
            style={{
              overflow: "hidden",
              WebkitMask:
                "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
              mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
            }}
          >
            <motion.ul
              className="tag-list scroller__inner"
              style={{
                paddingBlock: "1rem",
                display: "flex",
                flexWrap: "nowrap", // Set to nowrap for horizontal scrolling
                gap: "2rem",
                width: "max-content",
              }}
              animate={controls}
            >
              {Object.keys(Icons).map((key, index) => {
                return (
                  <motion.li key={index}>
                    <Link to="#" className="trust-icon">
                      <motion.img
                        style={{ filter: "grayscale(1)" }}
                        whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
                        src={Icons[key]}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div> */}
        </motion.div>
      </section>
    </>
  );
});
TrustedBy.displayName = "TrustedBy";

const Services = React.memo(() => {
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const servicesData = [
    {
      title: "Website Design & Development",
      description:
        "Website Design and development services that deliver exquisite design, a user-friendly interface, and robust functionality for lasting impressions on the audience.",
      list: [
        "PHP Development",
        "Website management",
        "WordPress design & development",
        "Landing page design & development",
        "E-commerce website design & development",
      ],
      imageSrc: "assets/images/services_cards-webdev-img.png",
      svgImage:
        "/src/assets/images/serviceCardsSVGs/Website Design & Development.svg",
      custom: 1,
    },
    {
      title: "Social Media Management",
      description:
        "Enhance the social media presence of brands on diverse social platforms with engaging content to foster meaningful interactions and amplify reach.",
      list: [
        "Profile Optimization",
        "Targeted Page Likes",
        "Hashtag Trend Research",
        "Content Calendar",
        "Monthly Report",
      ],
      imageSrc: "assets/images/services_cards-smm-img.png",
      svgImage:
        "/src/assets/images/serviceCardsSVGs/Social Media Management.svg",
      custom: 2,
    },
    {
      title: "Content Development & Marketing",
      description:
        "Engaging and captivating content development that not only resonates with the audience but ranks well across all search engines.  ",
      list: [
        "Infographics",
        "Website Blogs",
        "Press Releases",
        "Website Copy",
        "Guest Posting",
        "Social Media Posting",
      ],
      imageSrc: "assets/images/services_cards-contentwriting-img.png",
      svgImage:
        "/src/assets/images/serviceCardsSVGs/Content Development & Marketing.svg",
      custom: 3,
    },
    {
      title: "Graphic Designing",
      description:
        "The creative team illustrates the brand's image and ideas in captivating visuals to communicate with the target audience.",
      list: [
        "Digital Broucher",
        "Email Marketing Graphics",
        "Logos and Branded Elements",
        "Poster, Banner and Signage",
        "Business Card, Letterhead and Envelope",
        "Social media graphics & digital marketing ads",
      ],
      imageSrc: "assets/images/services_cards-logodesign-img.png",
      svgImage: "/src/assets/images/serviceCardsSVGs/Graphic Designing.svg",
      custom: 4,
    },
    {
      title: "Search engine optimization",
      description:
        "Launch and maintain the websites on top of search results to enhance your online visibility with tried and tested Search Engine Optimization (SEO) services.",
      list: [
        "Meta Tags Optimization",
        "Google tags Setup",
        "Schema Optimization",
        "Website Layout Optimization",
        "Website Broken Link Analysis",
        "Penalty review & recovery",
      ],
      imageSrc: "assets/images/services_cards-seo-img.png",
      svgImage:
        "/src/assets/images/serviceCardsSVGs/Search Engine Optimization.svg",
      custom: 5,
    },
    {
      title: "Pay Per Click",
      description:
        "Building strategic ad campaigns and carrying data-driven optimizations to drive targeted traffic with our Pay-Per-Click (PPC) solutions.",
      list: [
        "Social Ads",
        "Google Ads",
        "Conversion Tracking",
        "Google Analytics set up",
        "Overall performance Analysis",
        "Campaign management and optimization",
      ],
      imageSrc: "assets/images/services_cards-ppc-img.png",
      svgImage: "/src/assets/images/serviceCardsSVGs/Pay Per Click.svg",
      custom: 6,
    },
  ];

  const ServiceItem = ({
    title,
    description,
    list,
    imageSrc,
    custom,
    svgImage,
  }) => (
    <motion.div className="serv-card" variants={variants} custom={custom}>
      <div className="serv-img">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="serv__text">
        <div className="serv-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="serv-hide">
          <img className="serv-icon" src={svgImage} alt="Tick" />
          <h3>{title}</h3>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button
            title="View More"
            type="button"
            svgBackgroundColor="#F89520"
            icon="solar:arrow-right-broken"
            borderColor="transparent"
          />
        </div>
      </div>
    </motion.div>
  );

  const textVariants = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.78, 0.77, 0.41, 0.42],
      },
    },
  };
  return (
    <>
      <section className="service-outer pad100">
        <motion.div className="container">
          <motion.div
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: false, amount: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="text-center"
          >
            <motion.h4
              variants={textVariants}
              className="sub-heading sub_hd-mx"
            >
              Our Services
            </motion.h4>
            <motion.h2 variants={textVariants} className="bigheading">
              What We Offer
            </motion.h2>
            <motion.p variants={textVariants}>
              Whatever service we provide, we give a thought about every small
              detail. Our main motive is brand growth and this is what leaves a
              mark on every customer.
            </motion.p>
          </motion.div>
          <motion.div
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ staggerChildren: 0.5 }}
            className="service-grid d-flex wrap-flex mt50"
          >
            {servicesData.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </motion.div>
        </motion.div>
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
            autoplay={{ delay: 3000}}
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
                  <Button
                    title="View More"
                    type="button"
                    color="#000"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                  />
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
                  <Button
                    title="View More"
                    color="#000"
                    type="button"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                  />
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
                  <Button
                    title="View More"
                    type="button"
                    color="#000"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                  />
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
            <h4 className="sub-hd sub-heading">Holistic Expertise</h4>
            <h2 className="bigheading">
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
            <Button
              title="Read More"
              type="button"
              svgBackgroundColor="#F89520"
              icon="solar:arrow-right-broken"
              className="mt25"
            />
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
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
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
              slidesPerView: 5,
            },
            1366: {
              slidesPerView: 7,
            },
          }}
          className="container d-flex"
        >
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (1).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (7).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (6).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (5).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (4).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (3).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (2).png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="assets/images/reward (2).png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
});
Rewards.displayName = "Rewards";

const ContactUs = React.memo(() => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbw5yS4jO5_yQ7GUhTqm6bZyfr1eT_Rv3txPos934jcrGmlEIl-Z01GIqnkpM_lbStDnWg/exec";

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post(scriptUrl, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

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
              <a
                href="mailto:Salesadaired@gmail.com"
                className="d-flex just-start gap-20"
              >
                <img src="assets/images/conticon (2).png" />
                <p>
                  Mail Id Of Sales Executive
                  <strong>Salesadaired@gmail.com</strong>
                </p>
              </a>
              <a
                href="skype:adaireddigital"
                className="d-flex just-start gap-20"
              >
                <img src="assets/images/conticon (1).png" />
                <p>
                  Our Skpe ID
                  <strong>adaireddigital</strong>
                </p>
              </a>
            </div>
            {/* <h2 className="bigheading mt25">& What you will get:</h2>
            <ul>
              <li>On-call inquiry assistance</li>
              <li>Project consulting by experts</li>
              <li>Detailed project estimation</li>
            </ul> */}
          </div>

          <div className="home-form w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="half-col"
                type="text"
                placeholder="Name"
                {...register("Name", { required: true })}
              />
              {errors.name && <p className="error">Name is required</p>}

              <input
                className="half-col"
                type="email"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && <p className="error">Valid email is required</p>}

              <input
                className="half-col"
                type="tel"
                placeholder="Phone No."
                {...register("Phone", { required: true })}
              />
              {errors.phone && (
                <p className="error">Phone number is required</p>
              )}

              <select
                className="serv__select half-col"
                {...register("Interest", { required: true })}
              >
                <option value="">Interested</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {errors.interest && (
                <p className="error">Please select an option</p>
              )}

              <select
                className="serv__select full-col"
                {...register("Budget", { required: true })}
              >
                <option value="">Budget</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {errors.budget && <p className="error">Please select a budget</p>}

              <label htmlFor="textarea">Message</label>
              <textarea
                className="full-col"
                rows="8"
                {...register("Message")} // No validation for message
              />

              <div className="checkbox full-col">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="vehicle1">
                  I consent to providing these details.
                </label>
                {errors.terms && (
                  <p className="error">You must accept the terms</p>
                )}
              </div>

              <Button
                title="Send Your Enquiry"
                type="submit"
                svgBackgroundColor="#F89520"
                icon="solar:arrow-right-broken"
                onClick={() => {}}
              />
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
