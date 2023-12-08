import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const buttonStyles = {
    color: props.textColor,
    borderColor: props.borderColor || " #A7A9AC",
    backgroundColor: props.backgroundColor || "#fff",
  };

  const svgStyles = {
    backgroundColor: props.svgBackgroundColor,
    color: props.svgColor || "#fff",
  };
  return (
    <>
      <Link to={props.navigateTo} className="">
        <button
          className={`btn ${props.className}`}
          type={props.type}
          style={buttonStyles}
        >
          {props.title}
          <Icon icon={props.icon} style={svgStyles} className="svg-icon mx-2" />
        </button>
      </Link>
    </>
  );
};

export default Button;
