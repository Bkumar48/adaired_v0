import React, { useState } from "react";
import "./Accordion.scss";
import { Icon } from "@iconify/react";

const Accordion = ({
  title,
  answer,
  pl,
  titleBefore,
  className,
  svgBackground,
  isOpen,
  onToggle,
}) => {
  const padding = pl || 0;

  const accordionClass = `accordion ${isOpen ? "active" : ""}  `;

  return (
    <div className={`${accordionClass} pl${padding} ${className}`}>
      <div className="accordion-header" onClick={onToggle}>
        <p className={`${titleBefore ? "with-before" : ""}`}>{title}</p>
        <div className="svg_container">
          <Icon icon="simple-line-icons:arrow-down" className="arrow-up" />
        </div>
      </div>
      {isOpen && <p className="accordion-content">{answer}</p>}
    </div>
  );
};

export default Accordion;
