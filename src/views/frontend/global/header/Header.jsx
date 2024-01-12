import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import JsonData from "./Header.json";
import { useState, useEffect } from "react";
import Button from "../../components/buttonComponent/Button";
const Header = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header className={`main-header`}>
        <div className="container d-flex">
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Link to="/">
              <img
                src={"assets/images/header_footer/logoMain.svg"}
                alt="logo"
              />
            </Link>
          </motion.div>
          <div className="header-left d-flex gap-20">
            <div className="navbar">
              <div className="toggle-menu" onClick={handleShowNavbar}>
                <Icon
                  icon="icon-park:hamburger-button"
                  className="mobile-toggle"
                />
                <ul className={`menu d-flex ${showNavbar && "active"}`}>
                  {JsonData.navbar.map((data, index) => {
                    return (
                      <motion.li
                        key={`navbar-${index}`}
                        className="nav-item"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.1,
                          ease: "easeInOut",
                          delay: 0.1 + index * 0.1,
                        }}
                        style={{
                          position: data.name === "services" && "static",
                          borderRadius: "0px",
                        }}
                      >
                        <Link to={data.link}>{data.name}</Link>
                        <Icon icon={data.icon} className="icon" />
                        {data.name !== "services" && data.childrens && (
                          <div className="dropdown_menu">
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
                          <div className="dropdown_menu megaMenu">
                            <div className="row">
                              {data.childrens.map((child, index) => {
                                return (
                                  <div className="col-4" key={`child-${index}`}>
                                    <Link to={child.link}>
                                      <h4>{child.name}</h4>
                                    </Link>
                                    <ul>
                                      {child.childrens.map(
                                        (subChild, index) => {
                                          return (
                                            <li key={`subChild-${index}`}>
                                              <Link to={subChild.link}>
                                                {subChild.name}
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="dropdown_slider">
                              <img
                                src={"../../../../assets/images/1.png"}
                                alt=""
                              />
                            </div>
                          </div>
                        )}
                      </motion.li>
                    );
                  })}
                  <motion.li
                    className="nav-item"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeInOut",
                      delay: 0.1 + 5 * 0.1,
                    }}
                  >
                    {" "}
                    <Button
                      title="Contact"
                      type="button"
                      svgBackgroundColor="#000"
                      icon="solar:arrow-right-broken"
                      navigateTo="/contact"
                    />
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
