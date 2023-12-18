// React components
import { memo, useReducer } from "react";
import Banner from "../../components/banners/Banner";
import Button from "../../components/buttonComponent/Button";
import { Icon } from "@iconify/react";
import DOMPurify from "dompurify";
import BannerSlider from "../../components/bannerSlider/BannerSlider";

// Memoized component for rendering HTML
const RenderHtml = memo(({ data }) => {
  if (!data) return null;
  const sanitizedHtml = DOMPurify.sanitize(data);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

// Memoized component for current recruitments
const CurrentRecruitments = memo(() => {
  const [isOpen, toggleAccordion] = useReducer((state) => !state, false);

  // Helper function to format date
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="current_recruitments">
        <div className="current__recruitment-card">
          <div className="job__title d-flex">
            <h3>Sr. Digital Marketing Executive</h3>
            <div className="job__upadted-on">
              <span>( 2 Days Ago )</span>
            </div>
          </div>

          <div className="job__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, quod, quae quia voluptates, quos maxime dolorum
              aperiam quibusdam voluptas doloribus. Quisquam voluptatibus, quod,
              quae quia voluptates, quos maxime dolorum aperiam quibusdam
              voluptas doloribus.
            </p>
          </div>

          <div className="d-flex experience__salary">
            <p className="experience_required">
              {" "}
              <Icon icon="carbon:calendar" color="#038EB0" /> 2-3 Years
            </p>

            <p>
              <Icon icon="mdi:rupee" color="#038eb0" /> 3-4 LPA
            </p>
          </div>

          <div className="job__location">
            <p>
              <Icon icon="carbon:location-filled" color="#038EB0" /> Bestech
              Business Tower, Mohali
            </p>
          </div>

          <div className="d-flex openings__applicants">
            <p className="openings">
              <Icon icon="carbon:user-filled" color="#038EB0" /> Opening - 2
            </p>

            <p>
              <Icon icon="carbon:user" color="#038EB0" /> Applicants - 5
            </p>
          </div>
        </div>

        <div className={`description__accordion ${isOpen ? "active" : ""}`}>
          <div
            className="description__accordion-header"
            onClick={toggleAccordion}
          >
            <h3>Description</h3>
            <div className="svg_container">
              <Icon icon="simple-line-icons:arrow-down" className="arrow-up" />
            </div>
          </div>
          {isOpen && (
            <div className="description__accordion-content">
              <div className="job__description">
                <h3>Job Description</h3>
                <p>
                  We are seeking a motivated and talented Digital Marketing
                  Executive to join our team.
                </p>
              </div>

              <div className="extraContent mt25">
                <RenderHtml data={"<h3>Responsibility :</h3>"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

CurrentRecruitments.displayName = "CurrentRecruitments";

// Memoized component for career form
const CareerForm = memo(() => {
  return (
    <div className="form">
      <form action="" className="career__form">
        <div className="form-group">
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="tel" id="phone" placeholder="Phone No." />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="current_designation"
            placeholder="Current Designation"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume : </label>
          <input type="file" id="resume" />
        </div>
        <div className="form-group">
          <textarea name="" id="" rows="5" placeholder="Query"></textarea>
        </div>
        <Button
          title="Submit"
          type="submit"
          svgBackgroundColor="#000"
          icon="solar:arrow-right-broken"
          borderColor="#FB9100"
          width="100%"
          textAlign="center"
        />
      </form>
    </div>
  );
});

CareerForm.displayName = "CareerForm";

// Main Career component
const Career = () => {
  return (
    <>
      {/* <Banner title="Career" />
      <div className="career_wrapper">
        <div className="career_container container pad100">
          <h2>We Are Currently Recruiting For :</h2>
          <div className="d-flex career_content align-start">
            <div className="career__left">
              <CurrentRecruitments />
            </div>
            <div className="career__right">
              <CareerForm />
            </div>
          </div>
        </div>
      </div> */}

      <BannerSlider />
    </>
  );
};

export default Career;
