import React from "react";
import Banner from "../../components/banners/Banner";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

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
              </div>
            </div>
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

const MainService = () => {
  return (
    <div>
      <Banner title={"Main Service Page"} />
      <IntroSection />
    </div>
  );
};

export default MainService;
