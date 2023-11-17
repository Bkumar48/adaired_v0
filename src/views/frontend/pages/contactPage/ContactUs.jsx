import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Banner from "../../components/banners/Banner";

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
  return (
    <div className="contact-para">
      <h4 className="sub-heading">Contact Us</h4>
      <h2 className="main-heading">Hate Filling Forms</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        exercitationem eos omnis sapiente, at officiis cumque reprehenderit
        debitis laborum temporibus perferendis velit voluptate rem, porro
        explicabo voluptatem repudiandae, dignissimos architecto!
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
              <Link to={`tel:${import.meta.env.VITE_FIRST_PHONE_NUMBER}`}>
                {import.meta.env.VITE_FIRST_PHONE_NUMBER}
              </Link>
              <Link to={`tel:${import.meta.env.VITE_SECOND_PHONE_NUMBER}`}>
                {import.meta.env.VITE_SECOND_PHONE_NUMBER}
              </Link>
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
                to={`mailto:${
                  import.meta.env.VITE_ADAIREDSUPPORT_SUPPORT_EMAIL
                }`}
              >
                {import.meta.env.VITE_ADAIRED_SUPPORT_EMAIL}
              </Link>
              <Link to={`mailto:${import.meta.env.VITE_ADAIRED_HR_EMAIL}`}>
                {import.meta.env.VITE_ADAIRED_HR_EMAIL}
              </Link>
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
    </>
  );
};

export default ContactUs;
