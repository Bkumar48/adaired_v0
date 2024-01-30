import React from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import DOMPurify from "dompurify";
import Banner from "../../components/banners/Banner";
const RenderHtml = React.memo(({ data }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

// Intro Section
const IntroSection = React.memo((props) => {
  return (
    <>
      <div className="intro__section pad100">
        <div className="container">
          <div className="text-center">
            <h4>{props.subHeading}</h4>
            <h2 className="bigheading">{props.caseStudyName}</h2>
            <p>{props.caseStudyDescription}</p>
          </div>
          <div className="case_single_img mt25">
            <img
              src={`${import.meta.env.VITE_API_IMG_URL}${props.caseStudyImage}`}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .intro__section::after {
            position: absolute;
            content: "";
            width: 120%;
            height: 35%;
            background-color: #02811a;
            left: -10%;
            bottom: 0;
            right: 0;
            margin: 0 auto;
            clip-path: circle(68.55% at 50% 100%);
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
});

IntroSection.displayName = "IntroSection";

// Project Details
const ProjectDetails = React.memo((props) => {
  return (
    <>
      <div className="project__details pt100">
        <div className="container">
          <div className="text-center mb-50">
            <h2 className="bigheading">About The Project</h2>
            <p>{props.aboutProjectDescription}</p>
          </div>
        </div>

        <div className="full-container challenges__section d-flex">
          <div className="w-50 challenges_list">
            <h2 className="bigheading">The Challenges</h2>
            <p>{props.challengesDescription}</p>

            <div className="challenges_box mb-50">
              <ul>
                {props.challengesAndSolutions.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-50 challenges-img">
            <img
              src={`${import.meta.env.VITE_API_IMG_URL}${
                props.challengesImage
              }`}
              alt="Image"
            />
          </div>
        </div>

        <div className="full-container solutions__section d-flex">
          <div className="w-50 solutions_img">
            <img
              src={`${import.meta.env.VITE_API_IMG_URL}${props.solutionsImage}`}
              alt="Image"
            />
          </div>
          <div className="w-50 solutions_list">
            <h2 className="bigheading">Solutions</h2>
            <p>{props.solutionsDescription}</p>

            <div className="solutions_box">
              <ul>
                {props.challengesAndSolutions.map((item, index) => (
                  <li key={index}>
                    <RenderHtml data={item.content} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ProjectDetails.displayName = "ProjectDetails";

// Technology Used
const TechnologyUsed = React.memo(
  ({
    categoryData,
    caseStudyData,
    technologiesUsedTitle,
    technologiesUsedDescription,
  }) => {
    return (
      <>
        <div className="technoloy__used pad100">
          <div className="container">
            <div className="text-center">
              <h4 className="bigheading">{technologiesUsedTitle}</h4>
              <p>{technologiesUsedDescription}</p>
            </div>
            <div className="tech_grid mt50">
              {caseStudyData &&
                caseStudyData.map((techId, index) => {
                  const technology =
                    categoryData &&
                    categoryData
                      .map((category) => category)
                      .flat()
                      .find((tech) => tech._id === techId);
                  return (
                    <div className="tech_grid_img" key={index}>
                      <div>
                        <img
                          src={`${import.meta.env.VITE_API_IMG_URL}${
                            technology ? technology.icon : "Unknown Technology"
                          }`}
                          alt="image"
                        />
                      </div>{" "}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
);

TechnologyUsed.displayName = "TechnologyUsed";

// Objectives
const Objectives = React.memo((props) => {
  return (
    <>
      <div className="case_goals pt100">
        <div className="container">
          <div className="text-center">
            <h4 className="bigheading white-para">{props.goalsTitle}</h4>
            <p className="white-para">{props.goalsDescription}</p>
          </div>
          {props.isSeoCaseStudy && (
            <div className="seo_stratergy d-flex align-start">
              <div className="seo_objectives">
                <h5 className="seo_objective_head">Objectives</h5>
                <ul className="objectives">
                  {props.objectives.map((item, index) => (
                    <li key={index}>
                      <h4 className="solution_head">{index + 1}</h4>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="seo_objectives">
                <h5 className="seo_objective_head">Stratergy</h5>
                <ul className="objectives_list">
                  {props.stratergy.map((item, index) => (
                    <li key={index}>
                      <h4 className="solution_head">{index + 1}</h4>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="goals_img mt50">
            <img
              src={`${import.meta.env.VITE_API_IMG_URL}${props.goalImage}`}
              alt="image"
            />
          </div>

          {props.isSeoCaseStudy && (
            <div className="seo_work_percentage">
              {props.growthBox &&
                props.growthBox.map((item, index) => (
                  <div className="seo_work" key={index}>
                    <div className="seo_arr_up">
                      <Icon icon="solar:arrow-up-outline" color="#fff" />
                    </div>
                    <h4 className="seo_work_head ">{item.title}</h4>
                    <span>{item.content}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .case_goals::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 70%;
            background-color: ${props.bgColor};
            left: 0;
            top: 0;
            right: 0;
            margin: auto;
            border-bottom-left-radius: 1000px 300px;
            border-bottom-right-radius: 1000px 300px;
            z-index: -1;
          }
        `}
      </style>
    </>
  );
});

Objectives.displayName = "Objectives";

// Result
const Result = React.memo((props) => {
  return (
    <>
      <div className="case_results pad100">
        <div className="container">
          <h2 className="bigheading">Result :</h2>
          <p>
            {props.resultDescription} <br /> <br />
          </p>
          <div className="case_results_grid">
            {props.resultBox &&
              props.resultBox.map((item, index) => (
                <div
                  className="result_box d-flex align-start just-start gap-20"
                  key={index}
                >
                  <div className="result_icon">
                    <img
                      src={`${import.meta.env.VITE_API_IMG_URL}${item.icon}`}
                      alt="icon"
                    />
                  </div>
                  <div className="result_box_flex_wrap">
                    <span>{item.title}</span>
                    <p>{item.percentage}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <p className="mt25">{props.resultFinalDescription}</p>
        </div>
      </div>
    </>
  );
});

Result.displayName = "Result";

const InnerCaseStudy = () => {
  const { slug } = useParams();
  const [categorySlug, setCategorySlug] = React.useState("");
  const {
    isLoading,
    error,
    data: caseStudy,
  } = useQuery({
    queryKey: ["caseStudy", slug],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/case-studies/${slug}`
      );
      const data = await response.data.result;
      setCategorySlug(data.category);
      return data;
    },
    placeholderData: keepPreviousData,
  });

  console.log(caseStudy);

  const { data: categoryData } = useQuery({
    queryKey: ["categories", categorySlug],
    queryFn: async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/case-studies-category/getCaseStudiesCategory/${categorySlug}`
      );
      return response.data.result || [];
    },
    placeholderData: keepPreviousData,
    enabled: categorySlug !== "",
  });

  return (
    <>
      {caseStudy && (
        <>
          <Banner title="Case Study" />{" "}
          <IntroSection
            subHeading={caseStudy.subHeading}
            caseStudyName={caseStudy.caseStudyName}
            caseStudyDescription={caseStudy.caseStudyDescription}
            caseStudyImage={caseStudy.caseStudyImage}
            bgColor={caseStudy.colorScheme}
          />
          <ProjectDetails
            aboutProjectDescription={caseStudy.aboutProjectDescription}
            challengesDescription={caseStudy.challengesDescription}
            solutionsDescription={caseStudy.solutionsDescription}
            solutionsImage={caseStudy.solutionsImage}
            challengesAndSolutions={caseStudy.challengesAndSolutions}
            challengesImage={caseStudy.challengesImage}
          />
          <TechnologyUsed
            technologiesUsedTitle={caseStudy.technologiesUsedTitle}
            technologiesUsedDescription={caseStudy.technologiesUsedDescription}
            categoryData={categoryData && categoryData.technologies}
            caseStudyData={caseStudy && caseStudy.technologiesUsed}
          />
          <Objectives
            goalsTitle={caseStudy.goalsTitle}
            goalsDescription={caseStudy.goalsDescription}
            isSeoCaseStudy={
              caseStudy.category === "search-engine-optimization" ? true : false
            }
            objectives={caseStudy.objectives}
            stratergy={caseStudy.stratergy}
            growthBox={caseStudy.growthBox}
            goalImage={caseStudy.goalImage}
            bgColor={caseStudy.colorScheme}
          />
          <Result
            resultDescription={caseStudy.resultDescription}
            resultBox={caseStudy.resultBox}
            resultFinalDescription={caseStudy.resultFinalDescription}
          />
        </>
      )}
    </>
  );
};

export default InnerCaseStudy;
