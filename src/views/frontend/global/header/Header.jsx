import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../stylesheets/frontend.css";
const Header = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector(".main-header");
  //     if (header) {
  //       header.classList.toggle("fixed-header", window.scrollY > 0);
  //     }
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".main-header");
      if (header) {
        header.classList.toggle("fixed-header", window.scrollY > 0);
        if (window.scrollY > 0) {
          header.style.top = "0"; // Slide in from the top
        } else {
          header.style.top = "-100px"; // Off-screen when not fixed
        }
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="container d-flex">
          <div className="logo">
            <Link to="/">
              <img src="assets/images/logo-hd.png" alt="logo" />
            </Link>
          </div>
          <div className="header-left d-flex gap-20">
            <div className="navbar">
              <div className="toggle-menu">
                <svg
                  className="open"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="iconAnim"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg
                  className="close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <ul className="menu d-flex">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#">BLOG</a>
                  </li>
                  <li>
                    <a href="#">SERVICES</a>
                  </li>
                  <li>
                    <a href="#">CASE STUDIES</a>
                  </li>
                  <li>
                    <a href="#">CARRER</a>
                  </li>
                  <li>
                    <a href="#" className="defbtn">
                      Contact
                    </a>
                  </li>
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
