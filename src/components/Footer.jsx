import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSchool } from "react-icons/fa";
function Footer() {
  return (
    <div
     className="container-fluid mt-5 py-5 px-sm-3 px-md-5" id='footer' style={{ color: 'white' }}>
    
  
  
    
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <a
            href="#"
            className="navbar-brand font-weight-bold text-red m-0 mb-4 p-0"
            style={{ fontSize: '40px', lineHeight: '40px' }}
          >
            <FaSchool />
            <span className="text-blue">Veer school</span>
          </a>
          <p style={{color:'white'}}>
            From seed to sapling to tree, and now the fruit of hard work! Spearheaded by Mr. Dharmveer Shastri (Retired HeadMaster)
            the veer school has gone through it all; braving challenges, winning victories and changing with the
            times, to offer quality education to school pupils.
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-outline-danger rounded-circle text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-twitter" style={{ color: '#7CB9E8' }}></i>
            </a>
            <a
              className="btn btn-outline-danger rounded-circle text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-facebook-f" style={{ color: '#7CB9E8' }}></i>
            </a>
            <a
              className="btn btn-outline-danger rounded-circle text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-linkedin-in" style={{ color: '#7CB9E8' }}></i>
            </a>
            <a
              className="btn btn-outline-danger rounded-circle text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-instagram" style={{ color: '#7CB9E8' }}></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="mb-4" style={{color:'red'}}>Get In Touch</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt" style={{ color: 'red' }}></h4>
            <div className="pl-3">
              <h5 style={{color:'#7CB9E8'}}>Address</h5>
              <p style={{color:'white'}}>Jui road Badhra, Dist. Charkhi Dadri, State Haryana (India) pin code 127308</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope" style={{ color: 'red' }}></h4>
            <div className="pl-3">
              <h5 style={{color:'#7CB9E8'}}>Email</h5>
              <p style={{color:'white'}}>veerinternationalschool@gmail.com</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt" style={{ color: 'red' }}></h4>
            <div className="pl-3">
              <h5 style={{color:'#7CB9E8'}}>Phone</h5>
              <p style={{color:'white'}}>74041-18009, 98128-24916</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="mb-4"style={{color:'red'}}>Quick Links</h3>
          <div className="d-flex flex-column justify-content-start" >
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>Home
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>About Us
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>Our Classes
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>Our Teachers
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>Our Blog
            </a>
            <a className="text-white" href="#">
              <i className="fa fa-angle-right mr-2" style={{ color: 'red' }}></i>Contact Us
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="mb-4" style={{color:'red'}}>Newsletter</h3>
          <div id="formstyle">
      
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
        </div>
      </div>
      <div
        className="container-fluid pt-5"
        style={{ borderTop: '1px solid rgba(255, 0, 0, 0.2)' }}
      >
        <p className="m-0 text-center text-black">
          &copy;
          <a className="text-red font-weight-bold" href="#" style={{ color: '#F9F6EE' }}>Veer International School.</a>
          All Rights Reserved.
          Designed by 
          <a className="text-red font-weight-bold" href="https://htmlcodex.com" style={{ color: '#F9F6EE' }}> Samundr Sheoran</a>
          {/* <br />Distributed By: */}
          {/* <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a> */}
        </p>
      </div>
    </div>
  );
}

export default Footer;
