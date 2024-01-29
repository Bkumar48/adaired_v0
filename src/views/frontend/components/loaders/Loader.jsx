import "./loaders.scss"; // Import your SCSS file

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader_content">
        <span className="loader"></span>
        <p className="mt25">
          Looking outside for you... <br />
          one second
        </p>
      </div>
    </div>
  );
};

export default Loader;
