import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/Gallery.css'; // Add your custom styles here if needed

function Gallery() {
  return (
    <div className=" mt-0">
      <h3 className="text-center mb-4 text-white bg-primary p-3" data-aos="slide-up">"Welcome to the Visual Journey of Veer International School"</h3>


      {/* Arts Section */}
      <div className='container'>

      
      <section className="mb-5">
        <h2 className='blue-text'data-aos="slide-up">Arts</h2>
        <div id="artsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Arts 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Art Piece 1</h5>
                <p data-aos="slide-up">Description of art piece 1.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Arts 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Art Piece 2</h5>
                <p data-aos="slide-up">Description of art piece 2.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img  data-aos="zoom-in"src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Arts 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Art Piece 3</h5>
                <p data-aos="slide-up">Description of art piece 3.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Arts 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Art Piece 4</h5>
                <p data-aos="slide-up">Description of art piece 4.</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#artsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#artsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Art Card 1" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Art Card 1</h5>
                <p className="card-text" data-aos="slide-up">Description of art card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Art Card 2" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Art Card 2</h5>
                <p className="card-text" data-aos="slide-up">Description of art card 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Art Card 3" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Art Card 3</h5>
                <p className="card-text" data-aos="slide-up">Description of art card 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="mb-5">
        <h2 className='blue-text' data-aos="slide-up">Sports</h2>
        <div id="sportsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Sports 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Sports Event 1</h5>
                <p data-aos="slide-up">Description of sports event 1.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Sports 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Sports Event 2</h5>
                <p data-aos="slide-up">Description of sports event 2.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Sports 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Sports Event 3</h5>
                <p data-aos="slide-up">Description of sports event 3.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Sports 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Sports Event 4</h5>
                <p data-aos="slide-up">Description of sports event 4.</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#sportsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#sportsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sports Card 1" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Sports Card 1</h5>
                <p className="card-text" data-aos="slide-up">Description of sports card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sports Card 2" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Sports Card 2</h5>
                <p className="card-text" data-aos="slide-up">Description of sports card 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Sports Card 3" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Sports Card 3</h5>
                <p className="card-text" data-aos="slide-up">Description of sports card 3.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Academics Section */}
      <section className="mb-5">
        <h2 className='blue-text' data-aos="slide-up">Academics</h2>
        <div id="academicsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Academics 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Academic Achievement 1</h5>
                <p data-aos="slide-up">Description of academic achievement 1.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Academics 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Academic Achievement 2</h5>
                <p data-aos="slide-up">Description of academic achievement 2.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Academics 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Academic Achievement 3</h5>
                <p data-aos="slide-up">Description of academic achievement 3.</p>
              </div>
              <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Academics 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Academic Achievement 4</h5>
                <p data-aos="slide-up">Description of academic achievement 4.</p>
              </div>
            </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#academicsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#academicsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Academics Card 1" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Academics Card 1</h5>
                <p className="card-text" data-aos="slide-up">Description of academics card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Academics Card 2" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Academics Card 2</h5>
                <p className="card-text" data-aos="slide-up">Description of academics card 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Academics Card 3" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Academics Card 3</h5>
                <p className="card-text" data-aos="slide-up">Description of academics card 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section className="mb-5">
        <h2 className='blue-text' data-aos="slide-up">Extracurricular Activities</h2>
        <div id="extracurricularCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Extracurricular 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Extracurricular Activity 1</h5>
                <p data-aos="slide-up">Description of extracurricular activity 1.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Extracurricular 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Extracurricular Activity 2</h5>
                <p data-aos="slide-up">Description of extracurricular activity 2.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Extracurricular 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Extracurricular Activity 3</h5>
                <p data-aos="slide-up">Description of extracurricular activity 3.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Extracurricular 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Extracurricular Activity 4</h5>
                <p data-aos="slide-up">Description of extracurricular activity 4.</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#extracurricularCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#extracurricularCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Extracurricular Card 1" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Extracurricular Card 1</h5>
                <p className="card-text" data-aos="slide-up">Description of extracurricular card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Extracurricular Card 2" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Extracurricular Card 2</h5>
                <p className="card-text" data-aos="slide-up">Description of extracurricular card 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Extracurricular Card 3" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Extracurricular Card 3</h5>
                <p className="card-text" data-aos="slide-up">Description of extracurricular card 3.</p>
              </div>
            </div>
          </div>
         
        
        </div>
      </section>

      {/* Events Section */}
      <section className="mb-5">
        <h2 className='blue-text' data-aos="slide-up">Events</h2>
        <div id="eventsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Event 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Event 1</h5>
                <p data-aos="slide-up">Description of event 1.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Event 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Event 2</h5>
                <p data-aos="slide-up">Description of event 2.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Event 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Event 3</h5>
                <p data-aos="slide-up">Description of event 3.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img data-aos="zoom-in" src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Event 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 data-aos="slide-up">Event 4</h5>
                <p data-aos="slide-up">Description of event 4.</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#eventsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#eventsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event Card 1" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Event Card 1</h5>
                <p className="card-text" data-aos="slide-up">Description of event card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event Card 2" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-up">Event Card 2</h5>
                <p className="card-text"data-aos="slide-up">Description of event card 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img data-aos="zoom-in" src="https://via.placeholder.com/300x200" className="card-img-top" alt="Event Card 3" />
              <div className="card-body">
                <h5 className="card-title"data-aos="slide-up">Event Card 3</h5>
                <p className="card-text" data-aos="slide-up">Description of event card 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Gallery;
