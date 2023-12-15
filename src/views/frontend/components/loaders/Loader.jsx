import "./loaders.scss"; // Import your SCSS file

const Loader = () => {
  return (
    <>
      <div className="loaderContainer">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Loading</h1>
      </div>
    </>
  );
};

export default Loader;
