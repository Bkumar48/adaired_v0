import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Icon } from "@iconify/react";
import JsonData from "./Header.json";
import AnimatedLinks from "./AnimatedLinks";

import Button from "../../components/buttonComponent/Button";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const [childVisibility, setChildVisibility] = useState({});
  const [grandChildVisibility, setGrandChildVisibility] = useState({});

  const handleChildClick = (index) => {
    setGrandChildVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleParentClick = (index) => {
    setChildVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };
  return (
    <header className={`${headerFixed == true && "header-fixed"}`}>
      <nav>
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

          <motion.button
            initial="hide"
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMobileNav}
            className="toggleButton"
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 5,
                },
              }}
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -5,
                },
              }}
            ></motion.span>
          </motion.button>

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
                  className="main-nav-link"
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                  
                  }}>
                  <AnimatedLinks title={data.name} link={data.link} />
                  {data.childrens && <Icon icon={data.icon} className="icon" />}
                  </div>

                  {data.name !== "Services" && data.childrens && (
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

                  {data.name === "Services" && data.childrens && (
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

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    staggerChildren: 0.25,
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="mobile-nav"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="mobile-nav-links"
              >
                {JsonData.navbar.map((data, index) => {
                  return (
                    <motion.li
                      key={`nav-item-${index}`}
                      variants={{
                        hide: {
                          y: "25%",
                          opacity: 0,
                        },
                        show: {
                          y: "0%",
                          opacity: 1,
                        },
                      }}
                    >
                      <Link
                        to={data.link}
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={() => handleParentClick(index)}
                      >
                        {data.name}{" "}
                        {data.childrens && (
                          <Icon icon={data.icon} className="icon" />
                        )}
                      </Link>
                      {data.childrens && childVisibility[index] && (
                        <motion.div
                          className="drop-menu"
                          variants={{
                            hide: {
                              opacity: 0,
                            },
                            show: {
                              opacity: 1,
                            },
                          }}
                        >
                          <ul>
                            {data.childrens.map((child, childIndex) => (
                              <li
                                key={`child-${childIndex}`}
                                onClick={() => handleChildClick(childIndex)}
                              >
                                <Link to={child.link}>{child.name}</Link>
                                {child.childrens && (
                                  <Icon icon={data.icon} className="icon" />
                                )}
                                {child.childrens &&
                                  grandChildVisibility[childIndex] && (
                                    <motion.div
                                      className="drop-menu"
                                      variants={{
                                        hide: {
                                          opacity: 0,
                                        },
                                        show: {
                                          opacity: 1,
                                        },
                                      }}
                                    >
                                      <ul>
                                        {child.childrens.map(
                                          (grandChild, grandChildIndex) => (
                                            <li
                                              key={`grandChild-${grandChildIndex}`}
                                            >
                                              <Link to={grandChild.link}>
                                                {grandChild.name}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </motion.div>
                                  )}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
