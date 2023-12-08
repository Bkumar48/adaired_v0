import React, { useMemo, useCallback } from "react";
import Button from "../../components/buttonComponent/Button";

const CaseStudy = ({ topColor = "#FFFFFF", bottomColor = "#7B97BC", heading = "Rehive" }) => {
  const caseStudyCardStyles = useMemo(() => ({
    background: `linear-gradient(to bottom, ${topColor} 75%, ${bottomColor} 25%)`,
    position: "relative",
  }), [topColor, bottomColor]);

  const createInlineStyles = useCallback((
    height,
    width,
    top,
    bottom,
    left,
    right,
    transform
  ) => ({
    content: "''",
    position: "absolute",
    height,
    width,
    background: bottomColor,
    top,
    bottom,
    left,
    right,
    transform: `translateX(${transform})`,
  }), [bottomColor]);

  const colorBoxStyles = useMemo(() => createInlineStyles("22px", "34px", "50px", undefined, "50px", undefined), [createInlineStyles]);
  const ImageHeadingStyles = useMemo(() => createInlineStyles("2px", "120px", undefined, "-8px", "50%", undefined, "-50%"), [createInlineStyles]);

  const categories = ["All", "Web Development & Redesign", "Organic Growth (SEO)", "Digital Creative & Logo Design"];

  const handleButtonClick = useCallback(() => {
    // Your button click logic
  }, []);

  return (
    <section className="case__study-section pad100">
      <div className="container">
        <div className="case__study-categories">
          <div className="case__study-categories-items d-flex">
            {categories.map((category, index) => (
              <button key={index} type="button" onClick={handleButtonClick}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="case__study-card mt50" style={caseStudyCardStyles}>
          <div className="case__study-card-inner">
            <div className="case__study-card-text-box">
              <div className="case__study-card-text">
                <span style={colorBoxStyles}></span>
                <h4 className="case__study-card-heading">
                  Lorem Ipsum is simply dummy text of the printing & industry.
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
              </div>
              <div className="case__study-technologies">
                {Array(3)
                  .fill("React Js")
                  .map((technology, index) => (
                    <div key={index} className="case__study-technologies-item">
                      <p>{technology}</p>
                    </div>
                  ))}
              </div>
              <Button
                title="View Case Study"
                type="button"
                svgBackgroundColor="#515151"
                icon="solar:arrow-right-broken"
                borderColor="transparent"
                className="btn__case-study"
              />
            </div>
            <div className="case__study-img-section ">
              <div className="case__study-img-heading">
                <h3>
                  {heading}
                  <span className="ImageHeadingStyles" style={ImageHeadingStyles}></span>
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis neque vero. Minus, modi eaque.
                </p>
                <div className="case__study-img">
                  <img src={"assets/images/rehvive_img.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
