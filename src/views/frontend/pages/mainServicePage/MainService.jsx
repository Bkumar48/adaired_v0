import React, { Suspense, lazy } from "react";
import Banner from "../../components/banners/Banner";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Blogs from "./../../components/blogSection/Blogs";
import DummyData from "./DummyData.json";
import Accordion from "../../components/customAccordion/Accordion";
import ContactUsCard from "../../components/contactusCard/ContactUsCard";
import GetInTouchForm from "../../components/getInTouchForm/GetInTouchForm";
import ServiceMenu from "../../components/serviceMenu/ServiceMenu";
import Button from "../../components/buttonComponent/Button";

const ComparisonSlider = lazy(() =>
  import("../../components/beforeAfterComparison/ComparisonSlider")
);

const IntroSection = React.memo(() => {
  const FourPoints = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ];
  return (
    <>
      <div className="pad50-50">
        <div className="container">
          <div className="service_flex">
            <div className="service_text w-70">
              <h2 className="main-heading">
                Shape Your Business With The Best Search Engine Optimization
                Agency
              </h2>
              <p>
                Finding your way to the ever-changing landscape of search engine
                algorithms requires an in-depth knowledge of the factors that
                influence rankings. At Adaired, we understand the dynamic
                quality of Google's algorithms and the challenges that
                businesses face in attaining the TOP ranks of Google. That’s
                where our enterprise SEO services can help.
              </p>

              <p>
                We have proficiency in adjusting to these changes, ensuring that
                your website remains visible and successful. Adaired has a track
                record of effectively managing countless campaigns around the
                world, which speaks for itself.
              </p>

              {/* <div className="d-flex gap-20">
                <div className="service__card-left">
                  <Link to="#" className="d-flex align-start just-start gap-20">
                    <Icon
                      icon="mdi:progress-tick"
                      color="#bc1d8d"
                      className="service-cta-icon"
                    />
                    <div>
                      <h6 className="new_head_1">Lorem Ipsum Dolor Sit</h6>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typeset indstry. Lorem Ipsum has been the industry's
                        stan dummy text .
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="service__card-right">
                  <Link className="d-flex align-start just-start gap-20">
                    <Icon
                      icon="mdi:progress-tick"
                      color="#bc1d8d"
                      className="service-cta-icon"
                    />
                    <div>
                      <h6 className="new_head_1">Lorem Ipsum Dolor Sit</h6>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typeset indstry. Lorem Ipsum has been the industry's
                        stan dummy text .
                      </p>
                    </div>
                  </Link>
                </div>
              </div> */}

              <div className="service-img mt25">
                <img src="assets/images/Pc_guy.jpg" alt="service-img" />
                <p>
                  To take your website to the top of search engine rankings, we
                  use an effective blend of industry best practices, data-driven
                  approaches, and new strategies. Our focus is to aid
                  considerable growth, generate quality leads, and ensure the
                  long-term viability of your online presence, rather than
                  merely delivering rapid results.
                </p>

                <p>
                  Let us handle the complexities of SEO so you can focus on what
                  you do best: running your company and counting the profits.
                  Team up with us, India's most trusted and professional SEO
                  agency, and let's design your company's future success
                  together.
                </p>
                <h2 className="main-heading">
                  Professional SEO Services To Transform Your Digital Presence
                </h2>
                <p>
                  Adaired provides professional Search Engine Optimization
                  services on a global scale. We have a team of the best SEO
                  experts, and we bring a wealth of industry expertise to the
                  table, ensuring that your online presence not only meets but
                  exceeds your expectations. Armed with the latest industry
                  insights and cutting-edge strategies, our team navigates the
                  dynamic realm of search algorithms to ensure your website
                  stays ahead of the curve.
                </p>

                <p>
                  We provide white-label SEO services and follow white-hat SEO
                  techniques to enhance your website's credibility and
                  visibility ethically. Our experts carry out onsite SEO
                  optimization, meticulously refining key elements such as meta
                  descriptions, alt tags, and title tags to align with search
                  engine algorithms. Through market analysis and keyword
                  research, we create high-quality copies. Our focus on
                  delivering a seamless user experience extends to strategic
                  internal linking, ensuring a well-structured and easily
                  navigable website.
                </p>
              </div>
            </div>
            <aside className="w-30">
              <div className="mb-50">
                <ServiceMenu />
              </div>
              <div className="mb-50">
                <GetInTouchForm />
              </div>
              <div className="mb-50">
                <ContactUsCard />
              </div>
            </aside>
          </div>
          {/* <div className="arrow-flex">
            {FourPoints.map((point, index) => {
              return (
                <div key={index} className="arrow-flex-iner d-flex just-start">
                  <Icon
                    icon="material-symbols:keyboard-double-arrow-right"
                    className="arrow_icon"
                  />
                  <p>{point}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
});
IntroSection.displayName = "IntroSection";

const ServiceBuild = React.memo((props) => {
  return (
    <>
      <div className="build_sec">
        <div className="container d-flex left-img">
          <div className="build_left w-60">
            <img src={"assets/images/build_img1.jpg"} alt="" />
          </div>
          <div className="build_right w-40">
            <h2 className="main-heading pl60">
              International SEO Services To Boost Leads And Conversions
            </h2>
            <div className="serv_acc mt25">
              <div className="service_accordion">
                {DummyData.map((item) => {
                  return (
                    <>
                      <Accordion
                        title={item.question}
                        answer={item.answer}
                        key={item.id}
                        pl={60}
                        titleBefore={true}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-start right-img">
          <div className="build-left_1 mt50 w-40">
            <h2 className="main-heading">
              Elevate Your Business With Effective SEO Services
            </h2>
            <p>
              Investing in SEO can help you improve website visibility,
              attracting a larger audience that is actively looking for your
              products or services. You can even enhance the user experience by
              optimizing page performance, mobile responsiveness, and content
              structure, ultimately leading to improved engagement.
            </p>

            {/* <div className="arrow-flex">
              <div className="arrow-flex-iner d-flex just-start">
                <Icon
                  icon="material-symbols:keyboard-double-arrow-right"
                  className="arrow_icon"
                />
                <p>Lorem Ipsum Lorem Ipsum</p>
              </div>
              <div className="arrow-flex-iner d-flex just-start">
                <Icon
                  icon="material-symbols:keyboard-double-arrow-right"
                  className="arrow_icon"
                />
                <p>Lorem Ipsum Lorem Ipsum</p>
              </div>
              <div className="arrow-flex-iner d-flex just-start">
                <Icon
                  icon="material-symbols:keyboard-double-arrow-right"
                  className="arrow_icon"
                />
                <p>Lorem Ipsum Lorem Ipsum</p>
              </div>
              <div className="arrow-flex-iner d-flex just-start">
                <Icon
                  icon="material-symbols:keyboard-double-arrow-right"
                  className="arrow_icon"
                />
                <p>Lorem Ipsum Lorem Ipsum</p>
              </div>
            </div> */}

            <p>
              Top-ranking websites are seen as more trustworthy, which increases
              their reliability. When combined with targeted SEO, it also
              increases conversion rates. SEO easily outperforms traditional
              advertising in terms of cost-effectiveness, drawing higher-quality
              traffic more efficiently.
            </p>

            <p>
              SEO services' insightful analytics provide essential data on user
              behavior and strategy performance. It enables you to adapt to
              changes in the industry and stay effective in the dynamic digital
              world. We, as an SEO services company, ensure your business's
              sustained visibility, giving you a powerful advantage over your
              competitors.{" "}
            </p>
          </div>
          <div className="build-right_1 pl60 w-60">
            <img src={"assets/images/build_img2.jpg"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
});
ServiceBuild.displayName = "ServiceBuild";

const ServiceParagraph = React.memo((props) => {
  return (
    <>
      <div className="service_paragraph">
        <div className="container">
          <h2 className="main-heading">Why Adaired?</h2>
          <p>
            At Adaired, we believe in delivering results, not hollow promises.
            We are the best search engine optimization agency for a reason. Our
            focus is on developing campaigns and strategies that deliver results
            and help your business achieve instant success. No smoke and
            mirrors, just real results!
          </p>

          {/* <div className="arrow-flex">
            <div className="arrow-flex-iner d-flex just-start">
              <Icon
                icon="material-symbols:keyboard-double-arrow-right"
                className="arrow_icon"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="arrow-flex-iner d-flex just-start">
              <Icon
                icon="material-symbols:keyboard-double-arrow-right"
                className="arrow_icon"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="arrow-flex-iner d-flex just-start">
              <Icon
                icon="material-symbols:keyboard-double-arrow-right"
                className="arrow_icon"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="arrow-flex-iner d-flex just-start">
              <Icon
                icon="material-symbols:keyboard-double-arrow-right"
                className="arrow_icon"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div> */}

          <p>
            <strong>Transparency:</strong> There’s no trust without
            transparency. Yes, it’s that simple! This is why we keep in the loop
            every step of the way and provide real-time detailed reports on
            performance, stats spent vs. sales, targets achieved, and more.
          </p>

          <p>
            <strong>Convenient for Your Pocket:</strong> Our main focus is to
            offer affordable SEO services and cater to your needs with plans
            tailored to your budget constraints. We can customize our SEO
            strategies as per your needs.
          </p>

          <p>
            <strong> We deliver results, not excuses:</strong> We are not the
            agency that bamboozles you with jargon, hype, and shiny campaigns.
            We outline the goals and results we aim for in real-time, and then
            we go and get them.
          </p>

          {/* <p className="pink-para mt25">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also th.
          </p> */}
        </div>
      </div>
    </>
  );
});
ServiceParagraph.displayName = "ServiceParagraph";

const PinkSection = React.memo((props) => {
  return (
    <>
      <section className="pink_sec">
        <div className="container">
          <div className="pink_sec_flex d-flex">
            <div className="pink_left w-50">
              <h5 className="sub-heading sub-hd">Lorem Ipsum</h5>
              <h2 className="main-heading">Request A Free SEO Audit</h2>
              <p>
                Discover what exactly is holding you back from achieving better
                results and staggering sales and ROI. Get a free, no-obligation
                audit.
              </p>

              <p>As part of the audit, we analyze:</p>

              <div className="lorem_grid">
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Site Speed</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Broken Links</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">User Experience</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Keywords Analysis</h6>
                </div>
              </div>

              <p>
                Let our skilled analysis uncover hidden optimization
                opportunities and set your digital journey on the path to
                unmatched success.
              </p>
            </div>
            <div className="pink_right w-50">
              <img src={"assets/images/clients.jpg"} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
PinkSection.displayName = "PinkSection";

const Consultation = React.memo((props) => {
  return (
    <>
      <section className="consultation_sec">
        <div className="container">
          <div className="consultation_flex d-flex">
            <div className="consul_left">
              <Link to="tel:+91-8907200008" className="d-flex gap-20">
                <div className="icon_box_white">
                  <Icon icon="charm:phone-call" className="consul-icons" />
                </div>
                <h4 className="conusl_head">
                  Get A Free Consultation
                  <br />
                  <strong>+91-8907200008</strong>
                </h4>
              </Link>
            </div>
            <div className="consul_right pl60">
              <Link to="mailto:info@adaired.com" className="d-flex gap-20">
                <div className="icon_box_white">
                  <Icon icon="mingcute:mail-open-fill" />
                </div>
                <h4 className="conusl_head">
                  Mail Us
                  <br />
                  <strong>info@adaired.com</strong>
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
Consultation.displayName = "Consultation";

const MainService = () => {
  return (
    <div>
      <Banner title={"Search Engine Optimization "} />
      <IntroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ComparisonSlider
          BackgroundImage={"assets/images/comparison_background.png"}
          topImage={"assets/images/comparison_foreground.png"}
        />
      </Suspense>
      <ServiceBuild />
      <ServiceParagraph />
      <PinkSection />
      <Consultation />
      <Blogs limit={3} />
    </div>
  );
};

export default MainService;
