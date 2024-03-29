import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// components not to be lazy loaded
import SplashScreen from "../components/SplashScreen/SplashScreen.jsx";
import Header from "../global/header/Header.jsx";
import Footer from "../global/footer/Footer.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Loader from "../components/loaders/Loader.jsx";

// lazy loaded components

const AboutUs = React.lazy(() => import("../pages/aboutusPage/AboutUs.jsx"));
const Privacy = React.lazy(() => import("../pages/policyPages/Privacy.jsx"));
const MainBlog = React.lazy(() => import("../pages/mainBlogPage/MainBlog.jsx"));
const Career = React.lazy(() => import("../pages/careerPage/Career.jsx"));
const ServicePage = React.lazy(() => import("../pages/servicePage/Index.jsx"));
// const Gallery = React.lazy(() => import("../pages/galleryPage/Gallery.jsx"));
const SingleBlog = React.lazy(() =>
  import("../pages/singleBlogPage/SingleBlog.jsx")
);
const CaseStudy = React.lazy(() =>
  import("../pages/caseStudyPage/CaseStudy.jsx")
);
const InnerCaseStudy = React.lazy(() =>
  import("../pages/innerCaseStudyPages/InnerCaseStudy.jsx")
);
const ContactUs = React.lazy(() =>
  import("../pages/contactPage/ContactUs.jsx")
);
const TermsAndConditions = React.lazy(() =>
  import("../pages/policyPages/TermsAndConditions.jsx")
);

const FrontLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div>
        <Header />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<MainBlog />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/case-studies/:slug" element={<InnerCaseStudy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route
              path="/services/:parentSlug/:slug"
              element={<ServicePage />}
            />
            <Route path="/Terms-Conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default FrontLayout;
