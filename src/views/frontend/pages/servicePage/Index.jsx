import React, { lazy, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import DOMPurify from "dompurify";

// Query Imports
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

// Necessary imports
import Banner from "../../components/banners/Banner";
import ContactUsCard from "../../components/contactusCard/ContactUsCard";
import GetInTouchForm from "../../components/getInTouchForm/GetInTouchForm";
import ServiceMenu from "../../components/serviceMenu/ServiceMenu";
import Button from "../../components/buttonComponent/Button";
import Accordion from "../../components/customAccordion/Accordion";
import ComparisonSlider from "../../components/beforeAfterComparison/ComparisonSlider";
import Blogs from "../../components/blogSection/Blogs";
import Loader from "../../components/loaders/Loader";

const RenderHtml = React.memo(({ data }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

const IntroSection = React.memo((props) => {
  let modifiedserviceDescriptionIII = props.serviceDescriptionIII || "";
  modifiedserviceDescriptionIII = modifiedserviceDescriptionIII.replace(
    /<ul>/g,
    '<ul class="half-list d-flex wrap-flex">'
  );
  return (
    <>
      <div
        className={`service_top-grid ${
          props.isChildService === false ? "pad100" : "pt100"
        }`}
      >
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
                        {/* <Icon
                          icon="mdi:progress-tick"
                          color="#bc1d8d"
                          className="service-cta-icon"
                        /> */}
                        <img
                          src={`${import.meta.env.VITE_API_IMAGE_URL}services/${
                            point.mainTwoPointsImage
                          }`}
                          alt=""
                        />
                        <div>
                          <h6 className="new_head_1">{point.title}</h6>
                          <p>{point.description}</p>
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
                <h2 className="bigheading mt25">{props.serviceHeadingII}</h2>
                <RenderHtml data={modifiedserviceDescriptionIII} />
              </div>
            </div>
            <aside className="stick_aside w-30">
              <div className="serv_from mb-50">
                {props.menuData.length !== 0 && (
                  <ServiceMenu menu={props.menuData} />
                )}
              </div>
              <div className="mb-50">
                <GetInTouchForm />
              </div>
              <div className="contact-card">
                <ContactUsCard />
              </div>
            </aside>
          </div>
          {props.fourPoints.length !== 0 && (
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
          )}
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
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="build_sec pt100">
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
                            key={index}
                            title={item.title}
                            answer={<RenderHtml data={item.content} />}
                            titleBefore={true}
                            isOpen={openAccordion === index}
                            onToggle={() => handleAccordionToggle(index)}
                          />
                        </div>
                      );
                    })}
                    <div>
                      <Button
                        title="Let's Talk"
                        type="button"
                        svgBackgroundColor="#000000"
                        icon="solar:arrow-right-broken"
                        borderColor="#FB9100"
                        navigateTo="/contact"
                      />
                    </div>
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
                      navigateTo="/contact"
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
  let modifiedServiceDescriptionIV = props.serviceDescriptionIV || "";
  modifiedServiceDescriptionIV = modifiedServiceDescriptionIV.replace(
    /<ul>/g,
    '<ul class="half-list d-flex wrap-flex">'
  );

  return (
    <>
      <div className="service_paragraph mt50 pb100">
        <div className="container">
          <h2 className="bigheading">{props.serviceHeadingIII}</h2>
          <RenderHtml data={modifiedServiceDescriptionIV} />
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
  const { parentSlug } = useParams();
  const { slug } = useParams();

  // Fetch service data only when the path includes /service
  const {
    data: servicesPages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["servicesPages", parentSlug, slug],
    queryFn: async () => {
      if (parentSlug !== undefined) {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/services/${parentSlug}/${slug}`
        );
        const data = response.data.data[0];
        return data;
      } else {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/services/${slug}`
        );
        const data = response.data.data[0];
        return data;
      }
    },
    keepPreviousData: keepPreviousData,
  });
  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Banner title={servicesPages.serviceBanner} />
      <IntroSection
        isChildService={servicesPages.isChildService}
        title={servicesPages.serviceTitle}
        description_1={servicesPages.serviceDescription}
        mainTwoPoints={servicesPages.mainTwoPoints}
        serviceImg={servicesPages.serviceImage}
        description_2={servicesPages.serviceDescriptionII}
        serviceHeadingII={servicesPages.serviceHeadingII}
        serviceDescriptionIII={servicesPages.serviceDescriptionIII}
        fourPoints={servicesPages.fourPoints}
        serviceImage={servicesPages.serviceImage}
        menuData={servicesPages.childrens}
      />

      {servicesPages.isChildService === false && (
        <OurProcess
          ourProcessSubHeading={servicesPages.ourProcessSubHeading}
          ourProcessImage1={servicesPages.ourProcessImageI}
          ourProcessImage2={servicesPages.ourProcessImageII}
        />
      )}

      <ServiceBuild data={servicesPages.combinedSection} />

      {servicesPages.isChildService === false && (
        <ServiceParagraph
          serviceHeadingIII={servicesPages.serviceHeadingIII}
          serviceDescriptionIV={servicesPages.serviceDescriptionIV}
        />
      )}
      {servicesPages.isChildService === false && (
        <PinkSection
          heading={servicesPages.LastSectionHeading}
          text={servicesPages.LastSectionText}
          image={servicesPages.LastSectionImage}
          hookline={servicesPages.LastSectionHookLine}
          points={servicesPages.LastSectionPoints}
        />
      )}
      {servicesPages.isChildService === false && <Consultation />}
      <Blogs limit={3} viewMoreBtn={true} />
    </div>
  );
};

export default Index;
