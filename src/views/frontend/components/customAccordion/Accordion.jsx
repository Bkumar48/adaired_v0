import React, { useState } from "react";
import "./Accordion.scss";
import { Icon } from "@iconify/react";

const Accordion = ({ title, answer, pl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const padding = pl || 0;

  const toggleAccordion = () => setIsOpen(prevIsOpen => !prevIsOpen);

  const accordionClass = `accordion ${isOpen ? "active" : ""}`;

  return (
    <div className={`${accordionClass} pl${padding}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        <div className="svg_container">
          <Icon icon="simple-line-icons:arrow-down" className="arrow-up" />
        </div>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default Accordion;
