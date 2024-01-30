import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttonComponent/Button";
import Blogs from "../../components/blogSection/Blogs";
import Testimonials from "../../components/testimonialsSection/Testimonials";
import OurProcessSection from "../../components/ourProcessSection/OurProcessSection";
import Banner from "../../components/banners/Banner";

const MemoizedBlogs = React.memo(Blogs);
const MemoizedTestimonials = React.memo(Testimonials);

const CaseStudy = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCategoryData, setActiveCategoryData] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  const handleButtonClick = useCallback(
    (newCategorySlug) => {
      setActiveCategory((prevCategorySlug) =>
        prevCategorySlug === newCategorySlug
          ? prevCategorySlug
          : newCategorySlug
      );
    },
    [setActiveCategory]
  );

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/case-studies-category/getCaseStudiesCategory/all`
      );
      return response.data.result || [];
    },
    placeholderData: keepPreviousData,
  });
  if (categories) {
    categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
  }
  useEffect(() => {
    if (categories.length > 0) {
      const updatedData = categories.find(
        (category) => category.slug === activeCategory
      );

      // If the active category is not "all", include its data in the activeCategoryData
      const filteredData =
        activeCategory === "all"
          ? categories.filter((category) => category.slug !== activeCategory)
          : [updatedData];

      setActiveCategoryData(filteredData);
    }
  }, [activeCategory, categories]);

  const { data: caseStudiesData = [] } = useQuery({
    queryKey: ["caseStudies", activeCategory],
    queryFn: async () => {
      try {
        let data;
        if (activeCategory !== "all") {
          const childSlugs = activeCategoryData[0]?.childrens || [];
          const fetchDataPromises = childSlugs.map((child) =>
            fetchCaseStudy(child)
          );
          data = await Promise.all(fetchDataPromises);
        } else {
          data = await fetchCaseStudy("all");
        }
        return data;
      } catch (error) {
        console.error("Error fetching case study data:", error);
        return [];
      }
    },
    placeholderData: keepPreviousData,
  });

  console.log("caseStudiesData", caseStudiesData);

  useEffect(() => {
    setCaseStudies(caseStudiesData);
  }, [caseStudiesData]);

  const fetchCaseStudy = async (slug) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/case-studies/${slug}`
      );
      return response.data.result;
    } catch (error) {
      console.error(`Error fetching case study data for ${slug}:`, error);
      return null;
    }
  };
  const CaseStudyCard = React.memo(({ caseStudies }) => {
    return (
      caseStudies &&
      caseStudies.map((caseStudy, index) => (
        <>
          <div
            className="case__study-card mt50"
            // style={{
            //   background: `linear-gradient(to bottom, #fff 75%, ${caseStudy.colorScheme} 25%)`,
            //   position: "relative",
            // }}
            key={index}
          >
            <div className="case__study-card-inner">
              <div className="case__study-card-text-box">
                <div className="case__study-card-text">
                  <span
                    style={{
                      position: "absolute",
                      content: "''",
                      height: "22px",
                      width: "34px",
                      top: "50px",
                      bottom: "unset",
                      left: "50px",
                      right: "unset",
                      backgroundColor: `${caseStudy.colorScheme}`,
                    }}
                  ></span>
                  <h4 className="case__study-card-heading">
                    About the project
                  </h4>
                  <p>
                    {caseStudy.aboutProjectDescription.slice(0, 200) + "..."}
                  </p>
                </div>
                <div className="case__study-technologies">
                  {caseStudy.technologiesUsed.map((techId, index) => {
                    const technology = activeCategoryData
                      .map((category) => category.technologies)
                      .flat()
                      .find((tech) => tech._id === techId);

                    return (
                      <div
                        key={index}
                        className="case__study-technologies-item"
                      >
                        <p>
                          {technology ? technology.title : "Unknown Technology"}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <Button
                  title="View Case Study"
                  type="button"
                  svgBackgroundColor="#515151"
                  icon="solar:arrow-right-broken"
                  borderColor="transparent"
                  className="btn__case-study"
                  navigateTo={`/case-studies/${caseStudy.slug}`}
                />
              </div>
              <div className="case__study-img-section ">
                <div className="case__study-img-heading">
                  <h2 className="bigheading text-center">
                    {caseStudy.caseStudyName}
                    <span
                      className="ImageHeadingStyles"
                      style={{
                        position: "absolute",
                        content: "''",
                        height: "2px",
                        width: "120px",
                        top: "unset",
                        bottom: "-8px",
                        left: "50%",
                        right: "unset",
                      }}
                    ></span>
                  </h2>
                  <p>{caseStudy.caseStudyDescription.slice(0, 50) + "..."}</p>
                  <div className="case__study-img">
                    <img
                      src={`${import.meta.env.VITE_API_IMG_URL}${
                        caseStudy.cardImage
                      }`}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              .case__study-card {
                background: linear-gradient(
                  to bottom,
                  #fff 75%,
                  ${caseStudy.colorScheme} 25%
                );
                position: relative;
              }

              @media(max-width: 999px) {
                .case__study-card {
                  background: linear-gradient( to bottom, #fff 78%, #02811a 28% );
                 }
              }

              @media (max-width: 768px) {
                .case__study-card {
                  background: linear-gradient( to bottom, #fff 77%, #02811a 30% );
                }
              }

              @media (max-width: 600px) {
                .case__study-card {
                  background: linear-gradient( to bottom, #fff 71%, #02811a 30% );
                }
              }
              @media (max-width: 450px) {
                .case__study-card {
                  background: linear-gradient( to bottom, #fff 60%, #02811a 40% );
                }
              }
            `}
          </style>
        </>
      ))
    );
  });

  CaseStudyCard.displayName = "CaseStudyCard";

  return (
    <>
      <Banner title="Case Studies" />
      <section className="case__study-section pad100">
        <div className="container">
          <div className="case__study-categories">
            <div className="case__study-categories-items d-flex">
              {categories &&
                categories.map((category, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleButtonClick(category.slug)}
                    style={{
                      backgroundColor: `${
                        activeCategory === category.slug ? "#038EB0" : "#fff"
                      }`,
                      color: `${
                        activeCategory === category.slug ? "#fff" : "#000"
                      }`,
                    }}
                  >
                    {category.categoryName}
                  </button>
                ))}
            </div>
          </div>

          <CaseStudyCard caseStudies={caseStudies} />
        </div>
      </section>

      <OurProcessSection />
      <MemoizedTestimonials />
      <MemoizedBlogs viewMoreBtn={true} limit={3} />
    </>
  );
};

export default CaseStudy;
