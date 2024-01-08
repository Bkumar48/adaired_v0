import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DOMPurify from "dompurify";

// Query Imports
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

// Components Imports
import Banner from "../../components/banners/Banner";
import Blogs from "./../../components/blogSection/Blogs";
import Accordion from "../../components/customAccordion/Accordion";
import ContactUsCard from "../../components/contactusCard/ContactUsCard";
import GetInTouchForm from "../../components/getInTouchForm/GetInTouchForm";
import ServiceMenu from "../../components/serviceMenu/ServiceMenu";
import Button from "../../components/buttonComponent/Button";
import ComparisonSlider from "../../components/beforeAfterComparison/ComparisonSlider";

const RenderHtml = React.memo(({ data }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

const IntroSection = React.memo((props) => {
  return (
    <>
      <div className="service_top-grid pad100">
        <div className="container">
          <div className="service_flex">
            <div className="service_text w-70">
              <h2 className="bigheading">{props.title}</h2>
              <RenderHtml data={props.description_1} />
              <div className="d-flex gap-20">
                {props.mainTwoPoints.map((point, index) => {
                  return (
                    <div className="service__card" key={index}>
                      <div className="d-flex align-start just-start gap-20">
                        <Icon
                          icon="mdi:progress-tick"
                          color="#bc1d8d"
                          className="service-cta-icon"
                        />
                        <div>
                          <h6 className="new_head_1">{point.title}</h6>
                          <RenderHtml data={point.content} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="service-img mt25">
                <img src="assets/images/Pc_guy.jpg" alt="service-img" />
                <RenderHtml data={props.description_2} />
                <h2 className="bigheading">{props.serviceHeadingII}</h2>
                <RenderHtml data={props.serviceDescriptionIII} />
              </div>
            </div>
            <aside className="w-30">
              <div className="mb-50">
                <ServiceMenu />
              </div>
              <div className="mb-50">
                <GetInTouchForm />
              </div>
              <div className="contact-card">
                <ContactUsCard />
              </div>
            </aside>
          </div>
          <div className="arrow-flex mt50">
            {props.fourPoints.map((point, index) => {
              return (
                <div
                  key={index}
                  className="full-list half-list d-flex wrap-flex "
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

const OurProcess = React.memo((props) => {
  return (
    <>
      <section className="container our_process text-center">
        <div className="doubal-border pad100">
          <h5 className="sub-heading sub_hd-mx">Our Process</h5>
          <h2 className="bigheading">Our Process</h2>
          <p>{props.ourProcessSubHeading}</p>
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

const ServiceBuild = React.memo((props) => {
  return (
    <>
      <div className="build_sec pad100_noRightLeft">
        {props.data.map((item, index) => {
          if (item.editorValue) {
            item.editorValue = item.editorValue.replace(
              /<ul>/g,
              '<ul class="half-list d-flex wrap-flex">'
            );
          }

          return (
            <>
              <div
                className={`full-container d-flex ${
                  index % 2 === 0 ? "even" : "odd"
                }`}
                key={`field-${index}`}
              >
                <div className="build_img w-50">
                  <img src={"assets/images/build_img1.jpg"} alt="Image" />
                </div>
                {item.accordion ? (
                  <div className="build_right w-50">
                    <h2 className="bigheading pl60">{item.heading}</h2>
                    {item.accordion.map((item, index) => {
                      return (
                        <div
                          className="service_accordion"
                          key={`accordion-${index}`}
                        >
                          <Accordion
                            title={item.title}
                            answer={<RenderHtml data={item.content} />}
                            key={item.id}
                            titleBefore={true}
                          />
                        </div>
                      );
                    })}
                    <Button
                      title="Let's Talk"
                      type="button"
                      svgBackgroundColor="#000000"
                      icon="solar:arrow-right-broken"
                      borderColor="#FB9100"
                    />
                  </div>
                ) : (
                  <div className="build_right build-text w-50">
                    <h2 className="bigheading">{item.heading}</h2>

                    <RenderHtml data={item.editorValue} />
                    <Button
                      title="Let's Talk"
                      type="button"
                      svgBackgroundColor="#000000"
                      icon="solar:arrow-right-broken"
                      borderColor="#FB9100"
                    />
                  </div>
                )}
              </div>
            </>
          );
        })}
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
          <h2 className="bigheading">{props.serviceHeadingIII}</h2>
          <RenderHtml data={props.serviceDescriptionIV} />
        </div>
      </div>
    </>
  );
});

ServiceParagraph.displayName = "ServiceParagraph";

const PinkSection = React.memo((props) => {
  const modifiedText = props.text.replace(/<h2>/g, '<h2 class="bigheading">');

  return (
    <>
      <section className="pink_sec pad100">
        <div className="container">
          <div className="pink_sec_flex d-flex">
            <div className="pink_left w-50">
              <h5 className="sub-heading sub-hd">Performance Analysis</h5>
              <RenderHtml data={modifiedText} />
              <ul className="lorem_grid">
                <li className="lorem_box d-flex just-start gap-20">
                  <Icon icon="fluent-mdl2:bullseye" />
                  Lorem Ipsum
                </li>
              </ul>
              {/* <h2 className="bigheading">Lorem Ipsum</h2>
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
              </div> */}
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
  const {
    isLoading,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/services/`
      );
      const data = await response.data.data[0];
      return data;
    },
    placeholderData: keepPreviousData,
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  console.log(services);
  return (
    <div>
      <Banner title={"Main Service Page"} />
      <IntroSection
        title={services.serviceTitle}
        description_1={services.serviceDescription}
        mainTwoPoints={services.mainTwoPoints}
        serviceImg={services.serviceImage}
        description_2={services.serviceDescriptionII}
        serviceHeadingII={services.serviceHeadingII}
        serviceDescriptionIII={services.serviceDescriptionIII}
        fourPoints={services.fourPoints}
      />
      <OurProcess ourProcessSubHeading={services.ourProcessSubHeading} />
      <ServiceBuild data={services.combinedSection} />
      <ServiceParagraph
        serviceHeadingIII={services.serviceHeadingIII}
        serviceDescriptionIV={services.serviceDescriptionIV}
      />
      <PinkSection
        text={services.LastSectionText}
        image={services.LastSectionImage}
      />
      <Consultation />
      <Blogs limit={3} />
    </div>
  );
};

export default MainService;
