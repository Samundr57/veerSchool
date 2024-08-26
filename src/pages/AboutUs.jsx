import React from 'react';

function AboutUs() {
  return (
    <div className=" mt-0">
      <div className="jumbotron text-center bg-primary text-white" data-aos="slide-up" >
        <h4 className="display-2" data-aos="slide-up" >Welcome to Our School.</h4>
        <p  data-aos="slide-up" className="red-text" >Educating the leaders of tomorrow</p>
      </div>
<div className='container'>


      <div className="row mt-4">
        <div className="col-md-6">
          <h2 data-aos="zoom-in">Our Mission</h2>
          <p data-aos="slide-up">
            Our mission is to provide a high-quality education that empowers students to reach their full potential,
            fostering a love of learning and a commitment to excellence.
          </p>
        </div>
        <div className="col-md-6">
          <img data-aos="zoom-in" src="https://via.placeholder.com/500x300" alt="School" className="img-fluid rounded" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <img  data-aos="zoom-in"src="https://via.placeholder.com/500x300" alt="Students" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <ul className="list-group">
            <li className="list-group-item">Integrity</li>
            <li className="list-group-item">Respect</li>
            <li className="list-group-item">Responsibility</li>
            <li className="list-group-item">Excellence</li>
            <li className="list-group-item">Innovation</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2 data-aos="zoom-in">Our History</h2>
          <p data-aos="slide-up">
            Founded in 1980, our school has a long tradition of academic excellence and a commitment to providing
            a well-rounded education. Over the years, we have grown and evolved, continuously adapting to the
            changing needs of our students and community.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2 data-aos="zoom-in">Extracurricular Activities</h2>
          <p data-aos="slide-up">
            We offer a wide range of extracurricular activities including sports, music, art, and drama. Our students
            have the opportunity to develop their talents and interests beyond the classroom.
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\sports.jpg" className="card-img-top" alt="Sports" />
                <div className="card-body">
                  <h5 className="card-title">Sports</h5>
                  <p className="card-text" data-aos="slide-up">Football, Basketball, Tennis, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\culture3.jpg" className="card-img-top" alt="Music" />
                <div className="card-body">
                  <h5 className="card-title">Music</h5>
                  <p className="card-text" data-aos="slide-up">Choir, Orchestra, and Band and many more</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\art.jpeg" className="card-img-top" alt="Art" />
                <div className="card-body">
                  <h5 className="card-title">Art</h5>
                  <p className="card-text" data-aos="slide-up">Painting, Sculpture, and Drawing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img  data-aos="zoom-in" src="src\assets\images\extra3.jpg" className="card-img-top" alt="Drama" />
                <div className="card-body">
                  <h5 className="card-title">Drama</h5>
                  <p className="card-text" data-aos="slide-up">Theater and Performance Arts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Our Achievements</h2>
          <p data-aos="slide-up">
            Our students consistently achieve outstanding results in both academics and extracurricular activities.
            We are proud of our numerous awards and recognitions at local, state, and national levels.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\awards.jpg" className="card-img-top" alt="Principal" />
                <div className="card-body">
                  <h5 className="card-title">Award 1</h5>
                  <p className="card-text" data-aos="slide-up">keep an eye</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\awards1.jpg" className="card-img-top" alt="Teacher" />
                <div className="card-body">
                  <h5 className="card-title">Award 2</h5>
                  <p className="card-text" data-aos="slide-up">keep an eye</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img data-aos="zoom-in" src="src\assets\images\awards1.jpg" className="card-img-top" alt="Teacher" />
                <div className="card-body">
                  <h5 className="card-title">Award 3</h5>
                  <p className="card-text" data-aos="slide-up">keep an eye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4" data-aos="slide-up">
        <div className="col">
          <h2>Testimonials</h2>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-block w-100 bg-light p-4">
                  <div className="d-flex align-items-center">
                    <img data-aos="zoom-in" src="https://via.placeholder.com/50" className="rounded-circle mr-3" alt="Parent" />
                    <div>
                      <p className="mb-1">"The teachers are amazing! They are dedicated to helping each student achieve their best."</p>
                      <p className="mb-0"><strong>- Parent</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100 bg-light p-4">
                  <div className="d-flex align-items-center">
                    <img data-aos="zoom-in" src="https://via.placeholder.com/50" className="rounded-circle mr-3" alt="Student" />
                    <div>
                      <p className="mb-1">"I love the variety of extracurricular activities available. There's something for everyone."</p>
                      <p className="mb-0"><strong>- Student</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-block w-100 bg-light p-4">
                  <div className="d-flex align-items-center">
                    <img  data-aos="zoom-in" src="https://via.placeholder.com/50" className="rounded-circle mr-3" alt="Teacher" />
                    <div>
                      <p className="mb-1">"Our school has a welcoming community and a great learning environment."</p>
                      <p className="mb-0"><strong>- Teacher</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* map starts  */}
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

{/* map ends */}
    </div>
  );
}
export default AboutUs
