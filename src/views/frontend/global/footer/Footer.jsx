import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="ft-top_bar d-flex">
            <Link
              to="#"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <img src="assets/images/ft--cont (1).png" alt="count" />
              <span>
                <i>Find Us</i>
                B-509, 5th Floor, Bestech Business Towers,
                <br /> Sector 66, SAS Nagar, Punjab 160066
              </span>
            </Link>

            <Link
              to="#"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <img src="assets/images/ft--cont (3).png" alt="count" />
              <span>
                <i>Call Us</i>
                +91-8907200008
              </span>
            </Link>

            <Link
              to="#"
              className="ft-link d-flex just-start gap-20 align-start"
            >
              <img src="assets/images/ft--cont (2).png" alt="count" />
              <span>
                <i>Mail Us</i>
                info@adaired.com
              </span>
            </Link>
          </div>
          <div className="footer-bottom container d-flex align-start">
            <div className="footer_logo ft-col">
              <Link to="#" className="ft-logo">
                <img src="assets/images/ft-logo.png" alt="logo" />
              </Link>
              <p className="ft-para">
                Lorem Ipsum is simply dummy text of the printing and
                typesettingindustry. Lorem Ipsum has been the industry's
                standard dummy text ever.{" "}
              </p>

              <div className="footer_social">
                <h3>Follow Us</h3>
                <div className=" d-flex gap-20">
                  <Link to="#">
                    <img src="assets/images/ft-icon (1).png" alt="icon" />
                  </Link>
                  <Link to="#">
                    <img src="assets/images/ft-icon (4).png" alt="icon" />
                  </Link>
                  <Link to="#">
                    <img src="assets/images/ft-icon (3).png" alt="icon" />
                  </Link>
                  <Link to="#">
                    <img src="assets/images/ft-icon (2).png" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="ft_navbar  footer_nav  ft-col">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  {" "}
                  <Link to="#">About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">Our Team </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Case Study</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Carrer</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Blogs </Link>
                </li>
              </ul>
            </div>

            <div className="footer_nav  ft-col">
              <h3>Services</h3>
              <ul>
                <li>
                  {" "}
                  <Link to="#">Website Design & Development</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Content Development & Marketing</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Graphic Designing</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Search engine optimizationr</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Social Media Management</Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">Pay Per Click</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact ft-col">
              <h3>Contact Us</h3>
              <p>
                Don,t miss to subscribe to our new trends. Kindly fill the form
                below.
              </p>
              <div className="ft-form">
                <input
                  className="mail-col"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>

          <div className="copyright-col d-flex">
            <Link to="#">Copyright © 2023 - AdAired Digital Media</Link>
            <p>
              <Link to="#">Terms & Conditions / </Link>
              <Link to="#">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
