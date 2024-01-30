import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const buttonStyles = {
    color: props.textColor,
    borderColor: props.borderColor || "#A7A9AC",
    backgroundColor: props.backgroundColor || "#fff",
    width: props.width || "auto",
    textAlign: props.textAlign || "",
    fontFamily: props.fontFamily || "",
  };

  const svgStyles = {
    backgroundColor: props.svgBackgroundColor,
    color: props.svgColor || "#fff",
  };

  const buttonContent = (
    <>
      {props.title}
      <Icon icon={props.icon} style={svgStyles} className="svg-icon mx-2" />
    </>
  );

  return (
    <>
      {props.navigateTo ? (
        <Link
          to={props.navigateTo}
          target={props.target || "_self"}
          rel={props.rel || "noreferrer"}
        >
          <button className={`btn ${props.className}`} style={buttonStyles}>
            {buttonContent}
          </button>
        </Link>
      ) : (
        <button
          className={`btn ${props.className}`}
          type={props.type}
          style={buttonStyles}
          onClick={props.onClick}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};

export default Button;
