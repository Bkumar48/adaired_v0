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
      <div className="service_top-grid pad100">
        <div className="container">
          <div className="service_flex">
            <div className="service_text w-70">
              <h2 className="bigheading">Digital Creative & Logo Design</h2>
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
                <div className="service__card">
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

                <div className="service__card">
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
                <h2 className="bigheading">Lorem Ipsum is simply dummy text</h2>
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
                <div
                  key={index}
                  className="full-list half-list d-flex wrap-flex"
                >
                  <li>{point}</li>
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
      <div className="build_sec pad100">
        <div className="build-faq full-container d-flex align-start">
          <div className="build_img w-50">
            <img src={"assets/images/build_img1.jpg"} alt="" />
          </div>
          <div className="build_right w-50">
            <h2 className="bigheading">
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
                        titleBefore={true}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="full-container d-flex">
          <div className="build-right build-text w-50">
            <h2 className="bigheading">
              We Develop Websites That Drive Your Business Forward
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <ul class="half-list d-flex wrap-flex">
              <li>Lorem Ipsum Lorem Ipsum</li>
              <li>Lorem Ipsum Lorem Ipsum</li>
              <li>Lorem Ipsum Lorem Ipsum</li>
              <li>Lorem Ipsum Lorem Ipsum</li>
            </ul>

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
          <div className="build-img w-50">
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
      <div className="service_paragraph pb100">
        <div className="container">
          <h2 className="bigheading">Lorem Ipsum is simply dummy text</h2>
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
          <ul class="half-list d-flex wrap-flex">
            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>

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

const OurProcess = React.memo((props) => {
  return (
    <>
      <section className="container our_process text-center">
        <div className="doubal-border pad100">
        <h5 className="sub-heading sub_hd-mx">Our Process</h5>
        <h2 className="bigheading">Our Process</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div className="mt50">
        <Suspense fallback={<div>Loading...</div>}>
          <ComparisonSlider
            rightImage={"assets/images/comparison_background.png"}
            leftImage={"assets/images/comparison_foreground.png"}
            handleArrowBackgroundImage={
              "linear-gradient(90deg, rgba(251,145,0,1) 12%, rgba(188,29,158,1) 100%)"
            }
          />
        </Suspense>
        </div>
        </div>
      </section>
    </>
  );
});

OurProcess.displayName = "OurProcess";

const PinkSection = React.memo((props) => {
  return (
    <>
      <section className="pink_sec pad100">
        <div className="container">
          <div className="pink_sec_flex d-flex">
            <div className="pink_left w-50">
              <h5 className="sub-heading sub-hd">Lorem Ipsum</h5>
              <h2 className="bigheading">Lorem Ipsum</h2>
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
            <div className="consul_card">
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
            <div className="consul_card">
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

      <OurProcess />
      <ServiceBuild />
      <ServiceParagraph />
      <PinkSection />
      <Consultation />
      <Blogs limit={3} />
    </div>
  );
};

export default MainService;
