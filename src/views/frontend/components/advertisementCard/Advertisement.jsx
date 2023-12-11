import { Link } from "react-router-dom";
import JsonData from "./Advertisement.json";

const Advertisement = () => {
  return (
    <aside className="advertisement__wrapper">
      <div className="advertisement__container">
        <h6>Advertisement</h6>
        <Link to="#" className="advertisement__card">
          <img src={JsonData[0].advertisement_image} alt="image" />
          <div className="advertisement__badge">
            <span>Ad</span>
          </div>
          <div className="advertisement__text">
            <h4>{JsonData[0].advertisement_head}</h4>
            <p>{JsonData[0].advertisement_description}</p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Advertisement;
