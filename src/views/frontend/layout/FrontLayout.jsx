import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";

// components not to be lazy loaded
import Header from "../global/header/Header.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Payperclick from "../pages/servicePages/ppcPage/Payperclick.jsx";
import MainDevService from "../pages/servicePages/developmentPages/Index.jsx";
import SeoMainService from "../pages/servicePages/seoPages/Index.jsx";
import LogoDesignService from "../pages/servicePages/logoDesignPage/Index.jsx";
import SocialMediaService from "../pages/servicePages/socialMediaPages/Index.jsx";

// dev
import Wordpress from "../pages/servicePages/developmentPages/Wordpress.jsx";
import CustomDevelopment from "../pages/servicePages/developmentPages/CustomDevelopment.jsx";
import WooCommerce from "../pages/servicePages/developmentPages/WooCommerce.jsx";
import Shopify from "../pages/servicePages/developmentPages/Shopify.jsx";
import PhpDevelopment from "../pages/servicePages/developmentPages/PhpDevelopment.jsx";
import LaravelDevelopment from "../pages/servicePages/developmentPages/LaravelDevelopment.jsx";
import SocialOptimization from "../pages/servicePages/socialMediaPages/SocialOptimization.jsx";
import SocialMarketing from "../pages/servicePages/socialMediaPages/SocialMarketing.jsx";

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

const FrontLayout = () => {
  return (
    <div>
      <div>
        <Header />

        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            {frontendRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children && (
                  <>
                    {route.children.map((childRoute, childIndex) => (
                      <Route
                        key={childIndex}
                        path={childRoute.path}
                        element={childRoute.element}
                      >
                        {childRoute.children && (
                          <>
                            {childRoute.children.map(
                              (grandChildRoute, grandChildIndex) => (
                                <Route
                                  key={grandChildIndex}
                                  path={grandChildRoute.path}
                                  element={grandChildRoute.element}
                                />
                              )
                            )}
                          </>
                        )}
                      </Route>
                    ))}
                  </>
                )}
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
      {
        path: "seo",
        element: <SeoMainService />,
        children: [
          {
            path: "technical-seo-analysis",
            element: <Wordpress />,
          },
          {
            path: "online-reputation-management",
            element: <Wordpress />,
          },
          {
            path: "competitor-backlink-outreach",
            element: <Wordpress />,
          },
          {
            path: "guest-post-outreach",
            element: <Wordpress />,
          },
          {
            path: "on-page-and-off-page-optimization",
            element: <Wordpress />,
          },
          {
            path: "local-seo-gbp",
            element: <Wordpress />,
          },
        ],
      },
      {
        path: "content-marketing",
        element: <ContentMarketing />,
      },
      {
        path: "ppc",
        element: <Payperclick />,
      },
      {
        path: "web-designing-development",
        element: <MainDevService />,
        children: [
          {
            path: "wordpress-development",
            element: <Wordpress />,
          },
          {
            path: "custom-web-development",
            element: <CustomDevelopment />,
          },
          {
            path: "woocommerce",
            element: <WooCommerce />,
          },
          {
            path: "shopify-development",
            element: <Shopify />,
          },
          {
            path: "php-development",
            element: <PhpDevelopment />,
          },
          {
            path: "laravel-development",
            element: <LaravelDevelopment />,
          },
        ],
      },
      {
        path: "digital-creative-logo-design",
        element: <LogoDesignService />,
      },
      {
        path: "smm",
        element: <SocialMediaService />,
        children: [
          {
            path: "social-media-optimization",
            element: <SocialOptimization />,
          },
          {
            path: "social-media-marketing",
            element: <SocialMarketing />,
          },
        ],
      },
    ],
  },
];

export default FrontLayout;
