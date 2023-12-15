import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
import Loader from "../components/loaders/Loader.jsx";
import Career from "../pages/careerPage/Career.jsx";
import InnerCaseStudy from "../pages/innerCaseStudyPages/InnerCaseStudy.jsx";

// Lazy load view components
const Header = lazy(() => import("../global/header/Header.jsx"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const AboutUs = lazy(() => import("../pages/aboutusPage/AboutUs.jsx"));
const ContactUs = lazy(() => import("../pages/contactPage/ContactUs.jsx"));
const MainBlog = lazy(() => import("../pages/mainBlogPage/MainBlog.jsx"));
const Gallery = lazy(() => import("../pages/galleryPage/Gallery.jsx"));
const CaseStudy = lazy(() => import("../pages/caseStudyPage/CaseStudy.jsx"));
const SingleBlog = lazy(() => import("../pages/singleBlogPage/SingleBlog.jsx"));
const MainService = lazy(() =>
  import("../pages/mainServicePage/MainService.jsx")
);
const Footer = lazy(() => import("../global/footer/Footer.jsx"));

const FrontLayout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxShadow = scrollY > 0 ? "0 10px 30px -10px rgba(0,0,0,.3)" : "none";

  return (
    <div>
      <div>
        <Headroom
          style={{
            WebkitTransition: "all .5s ease-in-out",
            MozTransition: "all .5s ease-in-out",
            OTransition: "all .5s ease-in-out",
            transition: "all .5s ease-in-out",
            background: "#fff",
            zIndex: "9999",
            boxShadow,
            backdropFilter: "blur(10px)",
          }}
        >
          <Header />
        </Headroom>
        {/* Wrap Routes with Suspense */}
        <Suspense fallback={<Loader/>}>
          <Routes>
            {frontendRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

// Separate route configuration
const frontendRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/blog", element: <MainBlog /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/services", element: <MainService /> },
  { path: "/case-studies", element: <CaseStudy /> },
  { path: "/carrer", element: <Loader /> },
];

export default FrontLayout;
