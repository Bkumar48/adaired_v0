import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";

// Higher-order component for lazy loading
const lazyComponent = (importStatement) =>
  lazy(() => import(importStatement).catch((error) => ({ error })));

// Lazy load view components
const Header = lazyComponent("../global/header/Header.jsx");
const HomePage = lazyComponent("../pages/HomePage/HomePage.jsx");
const AboutUs = lazyComponent("../pages/aboutusPage/AboutUs.jsx");
const ContactUs = lazyComponent("../pages/contactPage/ContactUs.jsx");
const MainBlog = lazyComponent("../pages/mainBlogPage/MainBlog.jsx");
const Gallery = lazyComponent("../pages/galleryPage/Gallery.jsx");
const MainService = lazyComponent("../pages/mainServicePage/MainService.jsx");
const Footer = lazyComponent("../global/footer/Footer.jsx");

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
        <Suspense fallback={<div>Loading...</div>}>
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
          <Routes>
            {frontendRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </Suspense>
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
  { path:"/main-service", element: <MainService />}
];

export default FrontLayout;
