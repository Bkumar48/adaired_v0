import React, { useRef } from "react";
const Dropdown = (props) => {
  const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener("mousedown", (e) => {
      // user clicked outside of dropdown, and outside of toggle
      if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
        content_ref.current.classList.toggle("active");
      } else {
        // click outside of dropdown
        if (content_ref.current && !content_ref.current.contains(e.target)) {
          content_ref.current.classList.remove("active");
        }
      }
    });
  };

  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    // <div className="layout__content">
    <div ref={dropdown_toggle_el} className="dropdown">
      <button className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
    // </div>
  );
};

export default Dropdown;
