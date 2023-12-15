import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import JsonData from "./Header.json";

const Header = () => {
  return (
    <>
      <header className={`main-header`}>
        <div className="container d-flex">
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <Link to="/">
              <img src="assets/images/logo-hd.png" alt="logo" />
            </Link>
          </motion.div>
          <div className="navbar">
            <div className="toggle-menu">
              {/* <svg
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
              </svg> */}
              <ul className="menu d-flex">
                {JsonData.navbar.map((data, index) => {
                  return (
                    <li key={`navbar-${index}`}>
                      <Link to={data.link}>{data.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
