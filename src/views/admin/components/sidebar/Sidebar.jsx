import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import "../../assets/css/index.css";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div>
      {props.subMenu === undefined ? (
        <div className="sidebar__item">
          <div className={`sidebar__item-inner ${active}`}>
            <i className={props.icon}></i>
            <span>{props.title}</span>
          </div>
        </div>
      ) : (
        <div className="sidebar__item">
          <div
            className="sidebar__item-inner sidebar__item__w-submenu"
            onClick={props.onClick}
          >
            <i className={props.icon}></i>
            <span>{props.title}</span>
            {props.subMenu !== undefined && (
              <div className="sub__menu-icon">
                <span
                  style={{
                    transform: props.open ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                ></span>
              </div>
            )}
          </div>
          <div
            className={`sidebar__submenu`}
            style={{
              height: props.open ? `auto` : "0px",
              padding: props.open ? "10px 0" : "0 0",
            }}
          >
            {props.subMenu !== undefined &&
              props.subMenu.map((item, index) => (
                <Link to={item.route} key={index}>
                  <div className="sidebar__submenu-item">
                    <i className={item.icon}></i>
                    <span>{item.display_name}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [opensubmenuIndex, setOpensubmenuIndex] = useState(null);

  const toggleSubmenu = (index) => {
    if (opensubmenuIndex === index) {
      setOpensubmenuIndex(null);
    } else {
      setOpensubmenuIndex(index);
    }
  };

  const activeItem = sidebar_items.findIndex(
    (item) => item.route === location.pathname
  );

  const logoImagePath = "/assets/images/logo.svg";

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 1280) {
        setOpensubmenuIndex(null);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logoImagePath} alt="company logo" />
      </div>
      {sidebar_items.map((item, index) =>
        item.sub_menu ? ( // Check if item has a sub_menu
          <SidebarItem
            key={index}
            title={item.display_name}
            icon={item.icon}
            subMenu={item.sub_menu}
            onClick={() => {
              toggleSubmenu(index);
            }}
            open={opensubmenuIndex === index}
          />
        ) : (
          <Link
            to={item.route}
            key={index}
            onClick={() => {
              setOpensubmenuIndex(null);
            }}
          >
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        )
      )}

      <div className="sidebar__footer">
        <div className="sidebar__footer-title">
          {" "}
          <Link to="/admin/logout">
            <i className="bx bxs-log-out"></i> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
