import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";

// components not to be lazy loaded
import Header from "../global/header/Header.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Payperclick from "../pages/servicePages/ppcPage/Payperclick.jsx";

// Lazy load view components
const AboutUs = lazy(() => import("../pages/aboutusPage/AboutUs.jsx"));
const ContactUs = lazy(() => import("../pages/contactPage/ContactUs.jsx"));
const MainBlog = lazy(() => import("../pages/mainBlogPage/MainBlog.jsx"));
const Gallery = lazy(() => import("../pages/galleryPage/Gallery.jsx"));
const CaseStudy = lazy(() => import("../pages/caseStudyPage/CaseStudy.jsx"));
const Career = lazy(() => import("../pages/careerPage/Career.jsx"));
const Footer = lazy(() => import("../global/footer/Footer.jsx"));
const ContentMarketing = lazy(() =>
  import("../pages/servicePages/contentMarketingPage/ContentMarketing.jsx")
);
const MainService = lazy(() =>
  import("../pages/mainServicePage/MainService.jsx")
);

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
            height: "auto",
          }}
        >
          <Header />
        </Headroom>
        <Suspense fallback={<div>Loading</div>}>
          {/* <Routes>
            {frontendRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes> */}
          <Routes>
            {frontendRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
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
  { path: "/blog", element: <MainBlog /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/case-studies", element: <CaseStudy /> },
  { path: "/career", element: <Career /> },
  { path: "/contact", element: <ContactUs /> },
  {
    path: "/services",
    children: [
      { path: "seo", element: <MainService /> },
      {
        path: "content-marketing",
        element: <ContentMarketing />,
      },
      {
        path: "ppc",
        element: <Payperclick />,
      },
    ],
  },
];

export default FrontLayout;
