import React from 'react';
import '/src/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container mt-0" >
      <div className="text-center mb-5">
        {/* <h1>Contact Us</h1> */}
        <h3 className="text-center mb-4 text-white bg-primary p-3" data-aos="slide-up">"We would love to hear from you. Please reach out to us using the contact details below."</h3>

      </div>

      <div className="contact-main-body">
        <div className="contact-container mt-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-menu-card contact-card1">
                <h3 className='red-text' data-aos="slide-up">Mr. Dharmveer Shastri(Chairperson)</h3>
                <img  data-aos="zoom-in"src="src\assets\images\header.png" alt="dhramveer shastri" className="contact-main-img" />
                <div className="contact-social1 mt-3">
                  <a href="mailto:rjsangwan@gmail.com" className="text-decoration-none">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+919813229440" className="text-decoration-none ml-3">
                    <i className="fas fa-phone ml-4"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-menu-card contact-card1">
                <h3  data-aos="slide-up" className='red-text'>Mr. Hemant Sheoran(Director)</h3>
                <img data-aos="zoom-in" src="src\assets\images\hemant.jpg" alt="Hemant sheoran" className="contact-main-img" />
                <div className="contact-social1 mt-3">
                  <a href="mailto:vpsangwan@gmail.com" className="text-decoration-none">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+919813778094" className="text-decoration-none ml-3">
                    <i className="fas fa-phone ml-4"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-menu-card contact-card1">
                <h3 data-aos="slide-up" className='red-text'>Mrs Nirmal Singh(Principal)</h3>
                <img  data-aos="zoom-in" src="src\assets\images\principal.jpg" alt="Principal" className="contact-main-img" />
                <div className="contact-social1 mt-3">
                  <a href="mailto:rsroyal@gmail.com" className="text-decoration-none">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+919813236207" className="text-decoration-none ml-3">
                    <i className="fas fa-phone ml-4"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-menu-card contact-card1">
                <h3>Mr. Dalbir</h3>
                <img src="img2/dalbir.jpg" alt="Dalbir" className="contact-main-img" />
                <div className="contact-social1 mt-3">
                  <a href="mailto:dhillondalbir@gmail.com" className="text-decoration-none">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+919813613782" className="text-decoration-none ml-3">
                    <i className="fas fa-phone"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="map-container" data-aos="zoom-in">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6185674067938!2d75.94404927495269!3d28.52112158913222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912f11dfc965673%3A0x1fe9f9589375d1f2!2sVeer%20International%20school%20Badhra%20haryana!5e0!3m2!1sen!2sin!4v1723022591018!5m2!1sen!2sin"
        className="map-frame"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Veer International School Location"
      ></iframe>
    </div>

      <div className="row ml-4 mr-4" data-aos="zoom-in">
        <div className="col">
          <h2 className='blue-text' data-aos="slide-up">Send Us a Message</h2>
          <form>
            <div className="contact-form-group">
              <label htmlFor="name" data-aos="slide-up">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email" data-aos="slide-up">Email</label>
              <input type="email" className="form-control " id="email" placeholder="Enter your email" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message" data-aos="slide-up">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" data-aos="slide-up">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
