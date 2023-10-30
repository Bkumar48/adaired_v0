import React, { PureComponent } from 'react'

export class ContactPage extends PureComponent {
  render() {
    return (
      <>
      
    <section className="inner-baner">
        <div className="container">
            <h1 className="inner-baner-head">Contact Us</h1>
        </div>
    </section>
    
    <section className="contact-sec">
        <div className="contact-flex container d-flex pad100">
            <div className="contact-form contact_bor">
                <form action="/">
                    
                <label>Name</label>
                    <input className="full-col full-col-1 name-col" type="text" placeholder="Enter Your Name" />
                    
                    <label>E-mail</label>
                    <input className="full-col full-col-1 email-col" type="email" placeholder="Enter Your Email" />

                    <label>Phone Number</label>
                    <input className="full-col full-col-1 phone-col" type="tel" placeholder="Enter your Phone Number" />

                    <label>Your Message</label>
                    <textarea className="full-col full-col-2 msg-col" name="" placeholder="Enter Your Message" id="" rows="10"></textarea>

                    <button type="submit" className="submit1 defbtn arrow-btn">Submit</button>
                </form>
            </div>
            <div className="contact-para">
                <h4 className="sub-heading">Contact Us</h4>
                <h2 className="main-heading">Hate Filling Forms ?</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="social-cont-1">
                    <a href="#" className="d-flex just-start gap-20">
                        <img src="assets/images/carbon_location-filled.png" />
                        <p>Find Us <br />
                            <strong>
                                B-509, 5th Floor, Bestech Business Towers, Sector 66, SAS Nagar, Punjab 160066
                            </strong>
                        </p>
                    </a>
                    <div href="#" className="d-flex social-cont-iner just-start gap-20">
                        <img src="assets/images/ri_phone-fill.png" />
                        <p>Call Us <br />
                            <strong>
                                <a href="tel:+1 (205) 273-6006">+1 (205) 273-6006</a>
                                <a href="tel:+91 (890) 740-0008">+91 (890) 740-0008</a>
                            </strong>
                        </p>
                    </div>
                    <div href="#" className="d-flex social-cont-iner just-start gap-20">
                        <img src="assets/images/mingcute_mail-open-fill.png" />
                        <p>Email <br />
                            <strong>
                                <a href="mailto:info@adaired.com">info@adaired.com</a>
                                <a href="mailto:hr@adaired.com">hr@adaired.com</a>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="location">
        <img src="assets/images/Loc.png" alt="" />
    </section>
      </>
    )
  }
}

export default ContactPage