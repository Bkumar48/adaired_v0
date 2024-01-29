import { Link } from "react-router-dom";
import "./policy.scss";
import Banner from "../../components/banners/Banner";
const Privacy = () => {
  return (
    <div>
      <Banner title="Privacy Policy" />
      <section className="privacy-policy inner-main_content container mt50 pb100">
        <p>
          At AdAired Digital Media, we respect all our customers and give a
          thought about every small detail. The privacy of the customers is our
          main concern. The key motive of this privacy policy is to give you a
          clear picture of what information we ask for and how the team makes
          use of it. Mentioned below is gist of our privacy policy. Have a look.
        </p>
        <p>
          Time and time again, we keep working on our website by keeping in mind
          the latest technology in order to enhance it and make it easy for the
          customers to understand the services we provide. We will keep you
          notified whenever changes are done. In case you have any doubt, get in
          touch with us at
          <Link to="mailto:info@adaired.com"> info@adaired.com</Link>
        </p>
        <div className="privacy-gist">
          <h3>Privacy Gist</h3>
          <p>
            This is a complete gist of how me gather and use every detail of
            yours.
          </p>
          <h4 className="mt25">How and what details we gather?</h4>
          <ul>
            <li>
              <strong> You provide it to us:</strong> We gather your personal
              details including your name, email, and your message. This process
              takes place only when you provide it to us on your own will.
            </li>
            <li>
              <strong>Cookies:</strong> We do use cookies on our website.
            </li>
          </ul>
          <h4 className="mt25">How we use your details?</h4>
          <p>
            We make use of your personal details when you voluntarily provide us
            with it. In case if something goes wrong, we will make inquiries
            about it with an aim to prosecute to recover the loss against anyone
            and everyone at fault.
          </p>
          <p>
            We will not put into use your email address for an uninvited email
            unless clearly mentioned. Any message or email sent by us will be
            related to the particular service we provide.
          </p>
          <h4 className="mt25">Who collects your information?</h4>
          <p>
            When you are visiting to our website and are asked to fill your
            personal details, you are providing this information to the SEO
            department.
          </p>
          <h4 className="mt25">Do we share your information?</h4>
          <p>We do not share your personal information further.</p>
          <h4 className="mt25">Do we use cookies?</h4>
          <p>
            We may use cookies, tags, HTML5 local shared objects or flash
            cookies and advertising identifiers from third parties in reference
            to your use of the Service, third party websites, and mobile
            applications. The cookies can reside on your personal computer local
            storage, mobile devices and emails which are exchanged between you
            and our company. Cookies may transmit information about you and your
            use of the Service, like your browser type, search preferences, IP
            address, and therefore the date and time of your use. Cookies could
            also be persistent or stored only during a private session.
          </p>
          <h3>Contacting Us</h3>
          <p>
            If there are any questions regarding this privacy policy, you may
            contact us using the information below.
            <strong>
              B-509, 5th Floor, Bestech Business Towers, Sector 66, Sahibzada
              Ajit Singh Nagar, Punjab 160066
            </strong>
          </p>
          <p>
            <strong> Tel:</strong>
            <Link to="tel:+91-8907400008">
              {" "}
              <strong>+91-8907400008</strong>
            </Link>
          </p>
          <p>
            <strong>Email:</strong>
            <Link to="mailto:info@adaired.com">
              {" "}
              <strong>info@adaired.com</strong>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
