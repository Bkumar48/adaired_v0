import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DOMPurify from "dompurify";

// Query Imports
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

// Components Imports
import Banner from "../../../components/banners/Banner";
import Blogs from "../../../components/blogSection/Blogs";
import Accordion from "../../../components/customAccordion/Accordion";
import ContactUsCard from "../../../components/contactusCard/ContactUsCard";
import GetInTouchForm from "../../../components/getInTouchForm/GetInTouchForm";
import ServiceMenu from "../../../components/serviceMenu/ServiceMenu";
import ComparisonSlider from "../../../components/beforeAfterComparison/ComparisonSlider";
import Button from "../../../components/buttonComponent/Button";

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
              <div className="d-flex gap-20 mt25">
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
                <img
                  src={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                    props.serviceImage
                  }`}
                  alt="service-img"
                />
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
            <ComparisonSlider
              rightImage={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                props.ourProcessImage1
              }`}
              leftImage={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                props.ourProcessImage2
              }`}
              handleArrowBackgroundImage={
                "linear-gradient(90deg, rgba(251,145,0,1) 12%, rgba(188,29,158,1) 100%)"
              }
            />
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
      <div className="build_sec pad100">
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
                  <img
                    src={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                      item.combinedSectionImage
                    }`}
                    alt="Image"
                  />
                </div>
                {item.accordion ? (
                  <div className="build_right w-50">
                    <h2 className="bigheading">{item.heading}</h2>
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
                      navigateTo="/contact"
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
  const modifiedText = props.serviceDescriptionIV.replace(
    /<ul>/g,
    '<ul class="half-list d-flex wrap-flex">'
  );
  return (
    <>
      <div className="service_paragraph pb100">
        <div className="container">
          <h2 className="bigheading">{props.serviceHeadingIII}</h2>
          <RenderHtml data={modifiedText} />
        </div>
      </div>
    </>
  );
});

ServiceParagraph.displayName = "ServiceParagraph";

const PinkSection = React.memo((props) => {
  const modifiedText = props.text.replace(
    /<h2>/g,
    '<h2 class="bigheading">',
    /<ul>/g,
    '<ul class="half-list d-flex wrap-flex">'
  );

  return (
    <>
      <section className="pink_sec pad100">
        <div className="container">
          <div className="pink_sec_flex d-flex">
            <div className="pink_left w-50">
              {/* <h5 className="sub-heading sub-hd">Performance Analysis</h5> */}
              <h2 className="bigheading">{props.heading}</h2>
              <RenderHtml data={modifiedText} />
              {props.points && (
                <ul className="lorem_grid mb-25">
                  {props.points.map((point, index) => {
                    return (
                      <li
                        className="lorem_box d-flex just-start gap-20"
                        key={index}
                      >
                        <img
                          src={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                            point.LastSectionPointsImage
                          }`}
                          alt=""
                        />
                        <p>{point.title}</p>
                      </li>
                    );
                  })}
                </ul>
              )}

              <p>{props.hookline}</p>
            </div>
            <div className="pink_right w-50">
              <img
                src={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                  props.image
                }`}
                alt=""
              />
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

const Index = () => {
  const {
    isLoading,
    error,
    data: pageData,
  } = useQuery({
    queryKey: ["logoDesignPageData"],
    queryFn: async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/admin/services/?Id=65a66a5f19c4bed662cead92`
      );
      const data = response.data.data[0];
      return data;
    },
    placeholderData: keepPreviousData,
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Banner title={pageData.serviceBanner} />
      <IntroSection
        title={pageData.serviceTitle}
        description_1={pageData.serviceDescription}
        mainTwoPoints={pageData.mainTwoPoints}
        serviceImg={pageData.serviceImage}
        description_2={pageData.serviceDescriptionII}
        serviceHeadingII={pageData.serviceHeadingII}
        serviceDescriptionIII={pageData.serviceDescriptionIII}
        fourPoints={pageData.fourPoints}
        serviceImage={pageData.serviceImage}
      />
      <OurProcess
        ourProcessSubHeading={pageData.ourProcessSubHeading}
        ourProcessImage1={pageData.ourProcessImageI}
        ourProcessImage2={pageData.ourProcessImageII}
      />

      <ServiceBuild data={pageData.combinedSection} />
      <ServiceParagraph
        serviceHeadingIII={pageData.serviceHeadingIII}
        serviceDescriptionIV={pageData.serviceDescriptionIV}
      />
      <PinkSection
        heading={pageData.LastSectionHeading}
        text={pageData.LastSectionText}
        image={pageData.LastSectionImage}
        hookline={pageData.LastSectionHookLine}
        points={pageData.LastSectionPoints}
      />
      <Consultation />
      {/* <Blogs limit={3} /> */}
    </div>
  );
};

export default Index;
