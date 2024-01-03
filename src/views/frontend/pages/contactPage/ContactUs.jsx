import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Banner from "../../components/banners/Banner";
import { lazy } from "react";
import Button from "../../components/buttonComponent/Button";
import Map from "../../components/mapSection/map";
// const Map = lazy(() => import("../../components/mapSection/map"));

const ContactForm = () => {
  return (
    <div className="contact-form home-form">
      <form action="">
        <div className="full-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name" className="name-col"
          placeholder="Enter Your Name"
        />
        </div>
        <div className="full-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="email-col"
          placeholder="Enter Your Email"
        />
        </div>
        <div className="full-col">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          className="phone-col"
          name="phone"
          placeholder="Enter Your Phone Number"
        />
        </div>
        <div className="full-col">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          className="msg-col"
          name="message"
          placeholder="Enter Your Message"
          rows={5}
        />
        </div>
        <Button
          title="Submit"
          type="submit"
          svgBackgroundColor="#000"
          icon="solar:arrow-right-broken"
          borderColor="#FB9100"
          width="100%"
          textAlign="center"
        />
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
      <h4 className="sub-heading sub-hd">Ready to Elevate?</h4>
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
      <section className="contact__us-main d-flex align-start container pad100">
        <ContactForm />
        <ContactDetails />
      </section>

      <Map />
    </>
  );
};

export default ContactUs;
