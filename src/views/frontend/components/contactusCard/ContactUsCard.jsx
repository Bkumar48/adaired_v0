import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ContactInfo = [
  {
    label: "Find Us",
    icon: "carbon:location-filled",
    text: "B-509, 5th Floor, Bestech Business Towers, Sector 66, SAS Nagar, Punjab 160066",
    link: "https://www.google.com/maps/place/AdAired+Digital+Media/@30.6756472,76.737702,17z/data=!3m2!4b1!5s0x390e72f897e247c1:0x1dcb23146200054b!4m6!3m5!1s0x390fed5cb98c5777:0x8a21444801a080f9!8m2!3d30.6756426!4d76.7402769!16s%2Fg%2F11grbty6fy?entry=ttu",
  },
  {
    label: "Call Us",
    icon: "solar:outgoing-call-bold",
    text: "+91-8907200008",
    link: "tel:+91-8907200008",
  },
  {
    label: "Email Us",
    icon: "mingcute:mail-open-fill",
    text: "info@adaired.com",
    link: "mailto:info@adaired.com",
  },
];

const ContactUsCard = () => {
  return (
    <div className="contactus__card aside__cards-border ">
      <h4>Contact Us</h4>
      <div className="contactus__card-inner d-flex wrap-flex gap-20">
        {ContactInfo.map(({ label, icon, text, link }, index) => (
          <Link key={index} to={link} target="_blank" className="d-flex align-start just-start">
            <Icon icon={icon} />
            <h6>
              {label}
              <strong>{text}</strong>
            </h6>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactUsCard;
