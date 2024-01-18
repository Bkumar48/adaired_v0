import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="ft-top_bar d-flex align-start">
            <Link
              target="_blank"
              to="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <Icon icon="mdi:location" color="white" />
              <span>
                <i>Find Us</i>
                B-509, 5th Floor, Bestech Business Towers,
                <br /> Sector 66, SAS Nagar, Punjab 160066
              </span>
            </Link>

            <Link
              to="tel:+91-8907200008"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <Icon icon="carbon:phone-outgoing-filled" color="white" />
              <span>
                <i>Call Us</i>
                +91-8907200008
              </span>
            </Link>

            <Link
              to="mailto:info@adaired.com"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <Icon icon="mingcute:mail-open-fill" color="white" />
              <span>
                <i>Mail Us</i>
                info@adaired.com
              </span>
            </Link>
          </div>
          <div className="footer-bottom d-flex align-start">
            <div className="footer_logo ft-col">
              <Link to="#" className="ft-logo">
                <img
                  src="/assets/images/footerImages/footerLogo.svg"
                  alt="logo"
                />
              </Link>
              <p className="ft-para">
                AdAired Digital Media is a digital marketing company located in
                Mohali. We are a team of marketing and design experts who are
                committed to your online growth.{" "}
              </p>

              <div className="footer_social">
                <h3>Follow Us</h3>
                <div className=" d-flex gap-20">
                  <Link to="https://www.facebook.com/adaired.digital/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="https://twitter.com/adaireddigital">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="https://www.instagram.com/adaired.digital/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/adaired/">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="ft_navbar  footer_nav  ft-col">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  {" "}
                  <Link to="/about">About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/gallery">Gallery </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/case-studies">Case Study</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/blog">Blogs</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer_nav  ft-col">
              <h3>Services</h3>
              <ul>
                <li>
                  {" "}
                  <Link to="/services/web-designing-and-development">
                    Website Design & Development
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Content Development & Marketing</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/digital-creative-and-logo-design">
                    Graphic Designing
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/search-engine-optimization">
                    Search Engine optimization
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/strategic-social-media-management">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/paid-media-and-advertising">
                    Pay Per Click
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact ft-col">
              <h3>subscribe</h3>
              <p>
                Share your email address to subscribe to Adaired's newsletter.
              </p>
              <div className="ft-form">
                <input
                  className="mail-col"
                  type="email"
                  placeholder="Email Address"
                />
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>

          <div className="copyright-col d-flex">
            <Link to="#">Copyright © 2023 - AdAired Digital Media</Link>
            <p>
              <Link to="/Terms-Conditions">Terms & Conditions / </Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
