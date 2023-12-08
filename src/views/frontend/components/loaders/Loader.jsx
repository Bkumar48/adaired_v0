import { motion } from "framer-motion";
import "./loaders.scss"; // Import your SCSS file

const Loader = () => {
  return (
    <div className="animation-container">
      <h1>Redirecting</h1>

      <div className="body">
        {[...Array(5)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className="base">
        <span></span>
        <div className="face"></div>
      </div>

      <div className="longfazers">
        {[...Array(4)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
