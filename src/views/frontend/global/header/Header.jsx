// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";
// import JsonData from "./Header.json";
// import { useState } from "react";
// import Button from "../../components/buttonComponent/Button";
// const Header = (props) => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [active, setActive] = useState(false);
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };

//   const variants = {
//     open: { opacity: 1, y: 0 },
//     closed: { opacity: 0, y: "-100%" },
//   };

//   return (
//     <>
//       <motion.div
//         className={`main-header ${active && "activenav"}`}
//         variants={variants}
//         initial="closed"
//         animate="open"
//         transition={{
//           duration: 0.5,
//         }}
//       >
//         <motion.div className="container d-flex">
//           <motion.div>
//             <Link to="/">
//               <motion.img
//                 src={"assets/images/header_footer/logoMain.svg"}
//                 alt="logo"
//               />
//             </Link>
//           </motion.div>
//           <motion.div className="header-left d-flex gap-20">
//             <motion.div className="navbar">
//               <motion.div className="toggle-menu" onClick={handleShowNavbar}>
//                 <Icon
//                   icon="icon-park:hamburger-button"
//                   className="mobile-toggle"
//                 />
//                 <motion.ul className={`menu d-flex ${showNavbar && "active"}`}>
//                   {JsonData.navbar.map((data, index) => {
//                     return (
//                       <motion.li
//                         key={`navbar-${index}`}
//                         variants={variants}
//                         initial="closed"
//                         animate="open"
//                         transition={{
//                           delay: 0.5 + index * 0.1,
//                           duration: 0.5,
//                         }}
//                         className={`nav-item`}
//                       >
//                         <Link to={data.link}>{data.name}</Link>
//                         <Icon icon={data.icon} className="icon" />
//                         {data.name !== "services" && data.childrens && (
//                           <div className="dropdown_menu single-column-menu">
//                             <ul>
//                               {data.childrens.map((child, index) => {
//                                 return (
//                                   <li key={`child-${index}`}>
//                                     <Link to={child.link}>{child.name}</Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           </div>
//                         )}
//                         {data.name === "services" && data.childrens && (
//                           <div className="megaMenu">
//                             <div className="content">
//                               {data.childrens.map((child, index) => {
//                                 return (
//                                   <div className="row" key={`child-${index}`}>
//                                     <Link to={child.link}>
//                                       <h4 className="title">{child.name}</h4>
//                                     </Link>
//                                     <ul>
//                                       {child.childrens.map(
//                                         (subChild, index) => {
//                                           return (
//                                             <li key={`subChild-${index}`}>
//                                               <Link to={subChild.link}>
//                                                 {subChild.name}
//                                               </Link>
//                                             </li>
//                                           );
//                                         }
//                                       )}
//                                     </ul>
//                                   </div>
//                                 );
//                               })}

//                               <div className="row">
//                                 <img src="" alt="" />
//                                 hello
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </motion.li>
//                     );
//                   })}
//                   <motion.li
//                     className="nav-item"
//                     variants={variants}
//                     initial="closed"
//                     animate="open"
//                     transition={{
//                       delay: 0.5 + 6 * 0.1,
//                       duration: 0.5,
//                     }}
//                   >
//                     {" "}
//                     <Button
//                       title="Contact"
//                       type="button"
//                       svgBackgroundColor="#000"
//                       icon="solar:arrow-right-broken"
//                       navigateTo="/contact"
//                     />
//                   </motion.li>
//                 </motion.ul>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import JsonData from "./Header.json";

import Button from "../../components/buttonComponent/Button";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };
  return (
    <nav className={headerFixed && "header-fixed"}>
      <motion.div
        className="header-wrapper container"
        variants={variants}
        initial="closed"
        animate="open"
        transition={{
          duration: 0.5,
        }}
      >
        <div className="logo">
          <Link to="/">
            <motion.img
              src={"/assets/images/header_footer/logoMain.svg"}
              alt="logo"
            />
          </Link>
        </div>
        <motion.ul className="nav-links">
          {JsonData.navbar.map((data, index) => {
            return (
              <motion.li
                key={`nav-item-${index}`}
                variants={linkVariants}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.5,
                }}
              >
                <Link to={data.link}>
                  {data.name}
                  {data.childrens && <Icon icon={data.icon} className="icon" />}
                </Link>

                {data.name !== "services" && data.childrens && (
                  <div className="drop-menu">
                    <ul>
                      {data.childrens.map((child, index) => {
                        return (
                          <li key={`child-${index}`}>
                            <Link to={child.link}>{child.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {data.name === "services" && data.childrens && (
                  <div className="mega-box">
                    <div className="content">
                      {data.childrens.map((child, index) => {
                        return (
                          <div className="row" key={`child-${index}`}>
                            <Link to={child.link}>
                              <h4 className="title">{child.name}</h4>
                            </Link>
                            <ul className="mega-links">
                              {child.childrens.map((subChild, index) => {
                                return (
                                  <li key={`subChild-${index}`}>
                                    <span className="sub-icon">icon</span>{" "}
                                    <Link to={subChild.link}>
                                      {subChild.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    <div className="image">
                      <img
                        src="assets/images/certificationImages/image6.webp"
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </motion.li>
            );
          })}
          <motion.li
            variants={linkVariants}
            transition={{
              delay: 0.5 + 6 * 0.1,
              duration: 0.5,
            }}
          >
            <Button
              title="+91-8907200008"
              type="button"
              svgBackgroundColor="#000"
              icon="ic:round-phone"
              onClick={() => {
                window.location.href = "tel:+91-8907200008";
              }}
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Header;
