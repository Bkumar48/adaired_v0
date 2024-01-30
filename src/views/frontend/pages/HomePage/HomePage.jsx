import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Button from "../../components/buttonComponent/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Query Imports
import { useQuery } from "@tanstack/react-query";

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
            <motion.img src="/assets/images/homePage/splashLeft-.webp" />
          </motion.div>

          <div className="ambitious-col container text-center">
            <h2 className="bigheading">
              Digital Marketing Services for The Most Ambitious Enterprises
            </h2>
            <div className="splash-box">
              <div className="mike-img">
                <Icon icon="nimbus:marketing" />
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
            <motion.img src="/assets/images/homePage/splashRight-.webp" />
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="container d-flex align-start"
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
                  src="/assets/images/homePage/homePage_about1.svg"
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
                  src="/assets/images/homePage/homePage_about2.svg"
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
    1: "/assets/images/homePage/trustedBy1.webp",
    2: "/assets/images/homePage/trustedBy2.webp",
    3: "/assets/images/homePage/trustedBy3.webp",
    4: "/assets/images/homePage/trustedBy4.webp",
    5: "/assets/images/homePage/trustedBy5.webp",
    6: "/assets/images/homePage/trustedBy6.webp",
    7: "/assets/images/homePage/trustedBy7.webp",
    8: "/assets/images/homePage/trustedBy8.webp",
    9: "/assets/images/homePage/trustedBy9.webp",
    10: "/assets/images/homePage/trustedBy10.webp",
    11: "/assets/images/homePage/trustedBy11.webp",
    12: "/assets/images/homePage/trustedBy12.webp",
  };

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
            <motion.p className="p-100">
              The success of our clients is what determines our success. Below
              are a few of our favorite clients who we have worked for; we have
              reserved a spot for you!
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
      title: "Website Designing & Development",
      description:
        "Website Design and development services that deliver exquisite design, a user-friendly interface, and robust functionality for lasting impressions on the audience.",
      list: [
        "PHP Development",
        "Website management",
        "Website CMS migrations",
        "WordPress design & development",
        "Landing page design & development",
        "E-commerce website design & development",
      ],
      imageSrc: "/assets/images/homePage/serviceCard1.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack1.webp",
      svgImage: "/assets/images/homePage/Website Design & Development.svg",
      navigateTo: "/services/web-designing-and-development",
      custom: 1,
    },
    {
      title: "Strategic Social Media Management",
      description:
        "Enhance the social media presence of brands on diverse social platforms with engaging content to foster meaningful interactions and amplify reach.",
      list: [
        "Profile Optimization",
        "Targeted Page Likes",
        "Hashtag Trend Research",
        "Content Calendar",
        "Monthly Report",
      ],
      imageSrc: "/assets/images/homePage/serviceCard2.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack2.webp",
      svgImage: "/assets/images/homePage/Social Media Management.svg",
      navigateTo: "/services/strategic-social-media-management",
      custom: 2,
    },
    {
      title: "Compelling Content Marketing",
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
      imageSrc: "/assets/images/homePage/serviceCard3.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack3.webp",
      svgImage: "/assets/images/homePage/Content Development & Marketing.svg",
      navigateTo: "/services/compelling-content-marketing",
      custom: 3,
    },
    {
      title: "Digital Creative & Logo Design",
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
      imageSrc: "/assets/images/homePage/serviceCard4.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack4.webp",
      svgImage: "/assets/images/homePage/Graphic Designing.svg",
      custom: 4,
      navigateTo: "/services/digital-creative-and-logo-design",
    },
    {
      title: "Search Engine optimization (SEO)",
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
      imageSrc: "/assets/images/homePage/serviceCard5.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack5.webp",
      svgImage: "/assets/images/homePage/Search Engine Optimization.svg",
      navigateTo: "/services/search-engine-optimization",
      custom: 5,
    },
    {
      title: "Paid Media  & Advertising",
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
      imageSrc: "/assets/images/homePage/serviceCard6.webp",
      backgroundImage: "/assets/images/homePage/serviceCardBack6.webp",
      svgImage: "/assets/images/homePage/Pay Per Click.svg",
      navigateTo: "/services/paid-media-and-advertising",
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
    backgroundImage,
    navigateTo,
  }) => (
    <motion.div
      className="serv-card"
      variants={variants}
      custom={custom}
      data-content={backgroundImage}
    >
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
            navigateTo={navigateTo}
          />
        </div>
      </div>

      <style jsx>{`
        .serv-card[data-content="${backgroundImage}"]::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url(${backgroundImage});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.3s ease-in;
          pointer-events: none;
          z-index: -1;
        }

        .serv-card[data-content="${backgroundImage}"]:hover::after {
          opacity: 1;
        }
      `}</style>
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
            <motion.p variants={textVariants} className="p-100">
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
            autoplay={{
              disableOnInteraction: false,
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            parallax={true}
            loop={true}
            grabCursor={true}
          >
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Case Studies</h5>
                  <h2 className="bigheading">Search Engine Optimization </h2>
                  <p>
                    Check out the success stories showcasing the groundbreaking
                    capabilities of our strategic optimization techniques. Learn
                    how we have propelled brands to the forefront of search
                    rankings, driven organic traffic, and established long-term
                    credibility.
                  </p>
                  <Button
                    title="View More"
                    type="button"
                    color="#000"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                    navigateTo="/case-studies"
                  />
                </div>
                <div className="w-50">
                  <img src="/assets/images/homePage/caseStudiesImage.webp" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Success Stories</h5>
                  <h2 className="bigheading">Paid Media & Advertising </h2>
                  <p>
                    Gain insights into the potency of our precisely targeted PPC
                    campaigns. We have successfully transformed our clients'
                    advertising expenses into evident business expansion,
                    optimizing their ROI, and enhancing customer engagement.
                  </p>
                  <Button
                    title="View More"
                    color="#000"
                    type="button"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                    navigateTo="/case-studies"
                  />
                </div>
                <div className="w-50">
                  <img src="/assets/images/homePage/caseStudiesImage.webp" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="case-study-col">
              <div className="container d-flex">
                <div className="w-50">
                  <h5 className="sub-heading sub-hd">Project Highlights</h5>
                  <h2 className="bigheading">
                    Web Designing And Development Case Studies
                  </h2>
                  <p>
                    Explore the impact of our recent Web Designing and
                    Development projects. With technical proficiency and a
                    creative knack, we offer our clients visually striking and
                    structurally resilient digital solutions.
                  </p>
                  <Button
                    title="View More"
                    type="button"
                    color="#000"
                    svgBackgroundColor="#000"
                    icon="solar:arrow-right-broken"
                    borderColor="#F89520"
                    backgroundColor="transparent"
                    navigateTo="/case-studies"
                  />
                </div>
                <div className="w-50">
                  <img src="/assets/images/homePage/caseStudiesImage.webp" />
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
              src="/assets/images/homePage/TeamsBig.webp"
            />
            <img
              className="team-img"
              src="/assets/images/homePage/TeamsSmall.webp"
            />
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
              navigateTo="/about"
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
              <img src="assets/images/certificationImages/image1.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image2.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image3.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image4.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image5.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image6.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image7.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="reward-col">
            <div className="reward__img">
              <img src="/assets/images/certificationImages/image8.webp" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
});
Rewards.displayName = "Rewards";

const ContactUs = React.memo(() => {
  const schema = z.object({
    formId: z.string(),
    Name: z.string().min(2, { message: "Name is required" }),
    Email: z.string().min(5, { message: "Email is required" }).email(),
    Phone: z.string().min(10, { message: "Phone No. is required" }),
    Interest: z.string().min(2, { message: "Interest is required" }),
    Budget: z.string().min(2, { message: "Budget is required" }),
    Message: z.string(),
    consent: z.boolean().refine((val) => val === true, {
      message: "You must agree before submitting.",
    }),
  });
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxlZy1EuW8TN54wq36DIduhvQYXIy4MzKwg9ITlHH-rzzPNc5UdYHCBtKmrO_z3RqrCqg/exec";
  // const scriptUrl =
  //   "https://script.google.com/macros/s/AKfycbw5yS4jO5_yQ7GUhTqm6bZyfr1eT_Rv3txPos934jcrGmlEIl-Z01GIqnkpM_lbStDnWg/exec";

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post(scriptUrl, JSON.stringify(data));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/services/?allParent=true`
      );
      const data = await res.data.data;
      return data;
    },
    staleTime: Infinity,
  });

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
              <Link
                to="mailto:info@adaired.com"
                className="d-flex just-start gap-20"
              >
                <Icon
                  icon="mingcute:mail-open-fill"
                  style={{
                    color: "#316C7A",
                    fontSize: "3.5rem",
                  }}
                />
                <p>
                  Mail Id Of Sales Executive
                  <strong>info@adaired.com</strong>
                </p>
              </Link>
              <Link
                to="skype:live:.cid.46cf67c456a5bb0c?chat"
                className="d-flex just-start gap-20"
              >
                <Icon
                  icon="mdi:skype"
                  style={{
                    color: "#316C7A",
                    fontSize: "3.5rem",
                  }}
                />
                <p>
                  Our Skype ID
                  <strong>Adaired Digital</strong>
                </p>
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=918907400008"
                className="d-flex just-start gap-20"
                target="_blank"
              >
                <Icon
                  icon="ic:baseline-whatsapp"
                  style={{
                    color: "#316C7A",
                    fontSize: "3.5rem",
                  }}
                />
                <p>
                  Chat on
                  <strong>Whatsapp</strong>
                </p>
              </Link>
              <Link
                to="https://telegram.me/adaired"
                className="d-flex just-start gap-20"
                target="_blank"
              >
                <Icon
                  icon="mingcute:telegram-fill"
                  style={{
                    color: "#316C7A",
                    fontSize: "3.5rem",
                  }}
                />
                <p>
                  Ping us on
                  <strong>Telegram</strong>
                </p>
              </Link>
            </div>
          </div>

          <div className="home-form w-50">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                {...register("formId")}
                value="homepageForm"
              />

              <div className="formInput half-col">
                <input
                  className={` ${errors.Name ? "errors" : ""}`}
                  type="text"
                  placeholder="Name"
                  {...register("Name")}
                  defaultValue={""}
                />
                {errors.Name && (
                  <div className="error">{errors.Name.message}</div>
                )}
              </div>
              <div className="formInput half-col">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("Email")}
                  defaultValue={""}
                />
                {errors.Email && (
                  <div className="error">{errors.Email.message}</div>
                )}
              </div>

              <div className="half-col">
                <PhoneInput
                  country={"in"}
                  onChange={(phone) => setValue("Phone", phone)}
                  placeholder="Phone No."
                  defaultValue={""}
                />
                {errors.Phone && (
                  <div className="error">{errors.Phone.message}</div>
                )}
              </div>
              <div className="half-col">
                <select className="serv__select" {...register("Interest")}>
                  {services?.map((service, index) => {
                    return (
                      <option key={index} value={service.serviceBanner}>
                        {service.serviceBanner}
                      </option>
                    );
                  })}
                </select>
                {errors.Interest && (
                  <div className="error">{errors.Interest.message}</div>
                )}
              </div>

              <input
                type="text"
                placeholder="Budget"
                className="serv__select full-col"
                {...register("Budget")}
                defaultValue={""}
              />

              <label htmlFor="textarea">Message</label>
              <textarea
                className="full-col"
                rows="8"
                {...register("Message")}
                defaultValue={""} // No validation for message
              />

              <div className="checkbox full-col">
                <input type="checkbox" id="consent" {...register("consent")} />
                <label htmlFor="consent">
                  I consent to providing these details.
                </label>
                {errors.consent && (
                  <div className="error">{errors.consent.message}</div>
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
