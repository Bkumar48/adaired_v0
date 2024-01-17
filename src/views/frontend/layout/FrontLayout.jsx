import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// components not to be lazy loaded
import Header from "../global/header/Header.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";

// lazy loaded components
const AboutUs = React.lazy(() => import("../pages/aboutusPage/AboutUs.jsx"));
const MainBlog = React.lazy(() => import("../pages/mainBlogPage/MainBlog.jsx"));
const Gallery = React.lazy(() => import("../pages/galleryPage/Gallery.jsx"));
const CaseStudy = React.lazy(() =>
  import("../pages/caseStudyPage/CaseStudy.jsx")
);
const ContactUs = React.lazy(() =>
  import("../pages/contactPage/ContactUs.jsx")
);
const Career = React.lazy(() => import("../pages/careerPage/Career.jsx"));
const Footer = React.lazy(() => import("../global/footer/Footer.jsx"));
const ServicePage = React.lazy(() => import("../pages/servicePage/Index.jsx"));

const FrontLayout = () => {
  return (
    <div>
      <div>
        <Header />

        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<MainBlog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route
              path="/services/:parentSlug/:slug"
              element={<ServicePage />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default FrontLayout;
