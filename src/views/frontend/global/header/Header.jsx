import { Link } from "react-router-dom";
import "../../stylesheets/frontend.css";
const Header = (props) => {

  return (
    <>
      <header className={`main-header `}>
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
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/about">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/services">SERVICES</Link>
                  </li>
                  <li>
                    <Link to="/case-studies">CASE STUDIES</Link>
                  </li>
                  <li>
                    <Link to="/carrer">CARRER</Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="defbtn">
                      Contact
                    </Link>
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
