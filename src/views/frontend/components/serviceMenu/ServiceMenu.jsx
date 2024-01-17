import { Link } from "react-router-dom";

const ServiceMenu = ({ menu }) => {
  console.log("from menu", menu);
  return (
    <div className="service__menu">
      <div className="service__menu-item">
        <ul>
          {menu.map((item, index) => {
            return (
              <Link to={item} key={index}>
                <li>{item}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceMenu;
