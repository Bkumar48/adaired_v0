import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// Intro Section
const IntroSection = React.memo(() => {
  return (
    <>
      <div className="intro__section pad100">
        <div className="container">
          <div className="text-center">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h2 className="main-heading">
              Just Voda Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quos voluptatum ducimus sapiente ex quae aliquid accusantium!
              Adipisci facere perspiciatis esse. Perferendis itaque atque
              pariatur placeat quam error blanditiis iusto magnam, ab eveniet
              iure fuga molestias nulla facilis provident non perspiciatis
              molestiae cupiditate ratione? Fuga eligendi magnam quisquam quae
              facilis.
            </p>
          </div>
          <div className="case_single_img mt50">
            <img src="assets/images/laptop_just.png" alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
});

IntroSection.displayName = "IntroSection";

// Project Details
const ProjectDetails = React.memo(() => {
  return (
    <>
      <div className="project__details mt50">
        <div className="container">
          <div className="text-center">
            <h2 className="main-heading">About The Project</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              autem neque maiores! Tenetur fugiat ea, maxime at officia,
              reprehenderit quod repudiandae laborum inventore modi libero quia
              atque excepturi, sed dolore?
            </p>
          </div>
        </div>

        <div className="container challenges__section d-flex mt50">
          <div className="challenges_list">
            <h2 className="main-heading">The Challenges</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eos non quasi eum inventore sunt eaque eligendi
              exercitationem omnis maxime quos consequatur voluptatum molestiae
              magni. Illo error porro repellendus soluta!
            </p>

            <div className="challenges_box">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="challenges-img">
            <img src={"assets/images/Objective_img1.png"} alt="image" />
          </div>
        </div>

        <div className="container challenges__section d-flex">
          <div className="solutions_img">
            <img src={"assets/images/Objective_img1.png"} alt="image" />
          </div>
          <div className="solutions_list">
            <h2 className="main-heading">Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eos non quasi eum inventore sunt eaque eligendi
              exercitationem omnis maxime quos consequatur voluptatum molestiae
              magni. Illo error porro repellendus soluta!
            </p>

            <div className="solutions_box">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
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
const TechnologyUsed = React.memo(() => {
  return (
    <>
      <div className="technoloy__used pad100">
        <div className="container">
          <div className="text-center">
            <h4 className="main-heading">Technology We Used</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, at?
            </p>
          </div>
          <div className="tech_grid mt50">
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/laravel.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/html5.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/css.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/mysql.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/mysql.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/css.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/html5.jpg"} alt="image" />
              </Link>{" "}
            </div>
            <div className="tech_grid_img">
              <Link to="#">
                <img src={"assets/images/laravel.jpg"} alt="image" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

TechnologyUsed.displayName = "TechnologyUsed";

// Objectives
const Objectives = React.memo((props) => {
  return (
    <>
      <div className="case_goals">
        <div className="container">
          <div className="text-center">
            <h4 className="main-heading">{props.title}</h4>
            <p>{props.description}</p>
          </div>
          {props.isSeoCaseStudy && (
            <div className="seo_stratergy d-flex">
              <div className="seo_objectives">
                <h5 className="seo_objective_head">Objectives</h5>
                <ul className="objectives">
                  <li>
                    <h4 className="solution_head">Lorem Ipsum</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat voluptate nesciunt molestias doloremque qui
                      distinctio fugiat iusto illum saepe hic.
                    </p>
                  </li>
                  <li>
                    <h4 className="solution_head">Lorem Ipsum</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat voluptate nesciunt molestias doloremque qui
                      distinctio fugiat iusto illum saepe hic.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="seo_objectives">
                <h5 className="seo_objective_head">Stratergy</h5>
                <ul className="objectives_list">
                  <li>
                    <h4 className="solution_head">Lorem Ipsum</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat voluptate nesciunt molestias doloremque qui
                      distinctio fugiat iusto illum saepe hic.
                    </p>
                  </li>
                  <li>
                    <h4 className="solution_head">Lorem Ipsum</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellat voluptate nesciunt molestias doloremque qui
                      distinctio fugiat iusto illum saepe hic.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="goals_img mt50">
            <img src={"assets/images/goals.jpg"} alt="image" />
          </div>

          {props.isSeoCaseStudy && (
            <div className="seo_work_percentage">
              <div className="seo_work">
                <div className="seo_arr_up">
                  <Icon icon="solar:arrow-up-outline" />
                </div>
                <h4 className="seo_work_head">1372%</h4>
                <span>
                  INCREASE IN <br />
                  BLOG TRAFFIC
                </span>
              </div>

              <div className="seo_work">
                <div className="seo_arr_up">
                  <Icon icon="solar:arrow-up-outline" />
                </div>
                <h4 className="seo_work_head">1372%</h4>
                <span>
                  INCREASE IN <br />
                  BLOG TRAFFIC
                </span>
              </div>

              <div className="seo_work">
                <div className="seo_arr_up">
                  <Icon icon="solar:arrow-up-outline" />
                </div>
                <h4 className="seo_work_head">1372%</h4>
                <span>
                  INCREASE IN <br />
                  BLOG TRAFFIC
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

Objectives.displayName = "Objectives";

// Result
const Result = React.memo(() => {
  return (
    <>
      <div className="case_results mt50 pb100">
        <div className="container">
          <h4 className="main-heading">Result :</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            impedit asperiores dolorem quibusdam eaque, error praesentium
            laborum voluptatem aspernatur tenetur, atque deleniti animi optio
            saepe molestias sunt provident sit sapiente!
          </p>
          <div className="case_results_grid">
            <div className="result_box d-flex align-start just-start gap-20">
              <div className="icon_container">
                <Icon icon="simple-icons:icon" color="#038eb0" />
              </div>
              <div className="result_box_flex_wrap">
                <span>Functional Website</span>
                <p>
                  We built a functional website for the client that had a
                  responsive design.
                </p>
              </div>
            </div>
            <div className="result_box d-flex align-start just-start gap-20">
              <div className="icon_container">
                <Icon icon="simple-icons:icon" color="#038eb0" />
              </div>
              <div className="result_box_flex_wrap">
                <span>Mobile Optimized</span>
                <p>We had built a mobile responsive website for the client.</p>
              </div>
            </div>
            <div className="result_box d-flex align-start just-start gap-20">
              <div className="icon_container">
                <Icon icon="simple-icons:icon" color="#038eb0" />
              </div>
              <div className="result_box_flex_wrap">
                <span>Visually Appealing</span>
                <p>
                  Creating functional and visually appealing websites is our
                  speciality.
                </p>
              </div>
            </div>
            <div className="result_box d-flex align-start just-start gap-20">
              <div className="icon_container">
                <Icon icon="simple-icons:icon" color="#038eb0" />
              </div>
              <div className="result_box_flex_wrap">
                <span>Visually Appealing</span>
                <p>
                  It is important to create a website that loads quickly to
                  minimise bounce rate.
                </p>
              </div>
            </div>
          </div>
          <p className="mt25">
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
            been the industry's standard
          </p>
        </div>
      </div>
    </>
  );
});

Result.displayName = "Result";

const DevCaseStudy = () => {
  return (
    <>
      <IntroSection />
      <ProjectDetails />
      <TechnologyUsed />
      <Objectives
        title="Goals And Objectives"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        isSeoCaseStudy={true}
      />
      <Result />
    </>
  );
};

export default DevCaseStudy;
