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
              <h2 className="main-heading">Digital Creative & Logo Design</h2>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with zdesktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <div className="d-flex gap-20">
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
              </div>
              <div className="service-img mt25">
                <img src="assets/images/Pc_guy.jpg" alt="service-img" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <h2 className="main-heading">
                  Lorem Ipsum is simply dummy text
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset.{" "}
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
          <div className="arrow-flex">
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
          </div>
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
              Building Websites That Are Designed To Convert
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
              We Develop Websites That Drive Your Business Forward
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>

            <div className="arrow-flex">
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
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took. Lorem Ipsum is simply dummy
              text of the printing.
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
          <h2 className="main-heading">Lorem Ipsum is simply dummy text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          <div className="arrow-flex">
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
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <p className="pink-para mt25">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also th.
          </p>
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
              <h2 className="main-heading">Lorem Ipsum</h2>
              <p>
                Adaired is a multi-service digital marketing firm that has a
                qualified team of professionals to help you get noticed online.
                Our marketing solutions cater to many needs of our clients
                helping them grow online, increase exposure, and ultimately
                become the leader in the industry. What started as a small
                business, Adaired has now grown into a successful leading
                marketing agency helping businesses thrive online, worldwide.
              </p>

              <div className="lorem_grid">
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Lorem Ipsum</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Lorem Ipsum</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Lorem Ipsum</h6>
                </div>
                <div className="lorem_box d-flex just-start">
                  <div className="icon_box">
                    <Icon icon="fluent-mdl2:bullseye" />
                  </div>
                  <h6 className="lorem_text">Lorem Ipsum</h6>
                </div>
              </div>
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
      <Banner title={"Main Service Page"} />
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
