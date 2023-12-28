import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Banner from "../../components/banners/Banner";
import { lazy } from "react";
import Map from "../../components/mapSection/map";
// const Map = lazy(() => import("../../components/mapSection/map"));

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Your Phone Number"
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Name"
          rows={5}
        />

        <button type="submit" className="contact__us-submit-btn defbtn">
          Submit
        </button>
      </form>
    </div>
  );
};

const ContactDetails = () => {
  const firstContact = import.meta.env.VITE_FIRST_PHONE_NUMBER;
  const secondContact = import.meta.env.VITE_SECOND_PHONE_NUMBER;
  const firstEmail = import.meta.env.VITE_ADAIRED_SUPPORT_EMAIL;
  const secondEmail = import.meta.env.VITE_ADAIRED_HR_EMAIL;
  return (
    <div className="contact-para">
      <h4 className="sub-heading">Ready to Elevate?</h4>
      <h2 className="bigheading">Get In Touch</h2>
      <p>
        Welcome to Adaired, your one-stop destination for comprehensive digital
        marketing solutions. Every ambitious entrepreneur needs a digital
        marketing partner like us. To get started, please fill out the form on
        this page. We'll promptly connect with you to discuss your project and
        provide a personalized plan tailored to your business objectives.
      </p>
      <div className="contact__us-cta">
        <div className="d-flex just-start gap-20 contact__us-cta-inner">
          <Icon
            icon="carbon:location-filled"
            className="contact__us-cta-icon"
          />
          <h6>
            Find Us <br />
            <strong>
              B-509, 5th Floor, Bestech Business Towers, Sector 66, SAS Nagar,
              Punjab 160066
            </strong>
          </h6>
        </div>

        <div className="d-flex just-start gap-20 contact__us-cta-inner">
          <Icon
            icon="solar:outgoing-call-bold"
            className="contact__us-cta-icon"
          />
          <h6>
            Call Us
            <br />
            <strong>
              <Link to={`tel:${firstContact}`}>{firstContact}</Link>
              <Link to={`tel:${secondContact}`}>{secondContact}</Link>
            </strong>
          </h6>
        </div>

        <div className="d-flex just-start gap-20 contact__us-cta-inner">
          <Icon
            icon="mingcute:mail-open-fill"
            className="contact__us-cta-icon"
          />
          <h6>
            Email <br />
            <strong>
              <Link
                to={`mailto:${firstEmail}?subject=Adaired Support&body=Hi Adaired Team,`}
              >
                {firstEmail}
              </Link>
              <Link to={`mailto:${secondEmail}?`}>{secondEmail}</Link>
            </strong>
          </h6>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <>
      <Banner title="Contact Us" />
      <div className="contact__us-main container pad100">
        <ContactForm />
        <ContactDetails />
      </div>

      <Map />
    </>
  );
};

export default ContactUs;
