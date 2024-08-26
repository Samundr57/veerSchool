import React from 'react';
import { MdFence } from "react-icons/md";
import { GiDrum } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdPool } from "react-icons/md";

function Home(){
  return (
    <div>
      <div className="container-fluid bg-primary px-0 px-md-5 mb-5"  data-aos="slide-up" >
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">---Kids Learning Center---</h4>
            <h1 className="display-3 font-weight-bold text-white">
              New Approach to Kids Education
            </h1>
            <p className="text-white mb-4">
              Our aim in the school is to help a child realize his own unique potential. An education which aims at the flowering of
              the child's physical, emotional, mental, and spiritual personality.
            </p>
            <a href="#" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src="src/assets/images/header.png" alt="speech" />
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5" data-aos="zoom-in">
        <div className="container pb-3" >
          <div className="row">
            {[
              { icon:<MdFence className='icons' /> , title: "Play Ground", text: "Veer School follows a structured curriculum prescribed by the NASPE (National Association of Sports and Physical Education) to identify students with athletic potential." },
              { icon:<GiDrum className='icons' />,title: "Music and Dance", text: "Veer School offers training in contemporary dance, western jazz, and tap dances, as well as Indian dance forms. We have best music and dance teachers who are proficient in their fields" },
              { icon:<FaPaintBrush className='icons' /> ,title: "Arts and Crafts", text: "In Veer School Art & Craft classes, our students are taught a variety of skills like creativity, confidence, visual learning, decision making, perseverance, collaboration, and accountability." },
              { icon:<FaBusAlt className='icons' />,title: "Safe Transportation", text: "Buses fitted with specific speed governors, fire extinguishers, and first aid kits. Children looked after by trained attendants, provisions for GPS tracking and SMS updates to parents, and an optimum number of children in every bus used for transportation." },
              { icon:<IoFastFood  className='icons'/> ,title: "Healthy Food", text: "Veer School meals include milk, fruit, vegetables, and whole grains, providing key nutrients like calcium and fiber. These things will help your kid to be a healthy person and a healthy person can win any race of the world. Leave your child growth as our responsibility." },
              {icon:<MdPool  className='icons'/>, title: "Educational Tour", text: "Veer Edutour is a specialist educational tour operator serving exclusively the academic sector by arranging educational & fun tours for students of every age all over India. These tours helps your kid to know about the various cultures and they get more to know about the world." }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 pb-1">
                <div className="d-flex bg-light shadow-sm border-top rounded mb-4">
                  
                <div data-aos="zoom-in">
                    {item.icon}
                    </div>
                  <div className="pl-4">
                    
                   
                    <h4 className='h1style' data-aos="slide-up">{item.title}</h4>
                    <p className="m-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" data-aos="zoom-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-5 mb-lg-0" src="src/assets/images/about-1.jpg" alt="" />
            </div>
            <div className="col-lg-7" data-aos="slide-up">
              <p className="section-title pr-5">
                <span className="pr-2">Learn About Us</span>
              </p>
              <h1 className="mb-4 , h1style">Best School For Your Kids</h1>
              <p>
                Pursuit of excellence, experiential learning dedicated commitment towards quality education with an Indian
                Orientation. Founded and managed by distinguished members and humanaries of society, culted from various walks of life,
                the school trod on the path of progress with their visionary approach and lofty ideas.
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                  <img className="img-fluid rounded" src="src/assets/images/about-2.jpg" alt="" />
                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    {[
                      "veer Career Guidance/Awareness",
                      "veer provides day boarding activities (whole development)",
                      "focus on activities based learning skills",
                      "ENGLISH LAB - Platform to learn comprehensive & interactive English",
                      "SCIENCE EXPERIMENT AND APPLICATION",
                      "VISUAL AND PERFORMING ARTS"
                    ].map((item, index) => (
                      <li key={index} className="py-2 border-top border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-primary mt-2 py-2 px-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5" data-aos="slide-right">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Popular Classes</span>
            </p>
            <h1 className="mb-4, h1style">-Classes for Your Kids-</h1>
          </div>
          <div className="row">
            {[
              { title: "COMPUTER LAB", text: "Students at Veer School are instructed on the basics of computer use as early as Class I. Educational software is presented in a game-like format to entertain the younger students while they are learning key concepts.", img: "src/assets/images/class-1.jpg", age: "3 - 6 Years", class: "NUR-UKG CLASS", time: "08:00 - 1:00", fee: "Rs 18000 / YEAR" },
              { title: "STEAM & ROBOTICS", text: "STEAM at Veer not only incorporates teamwork and instruction in the ‘soft skills'. Robotics is a school programme for our students which stimulates their tender minds to engage themselves with the latest technology around them.", img: "src/assets/images/class-2.jpg", age: "6-11 Years", class: "1st TO 5th CLASS", time: "08:00 - 2:00", fee: "Rs 24500 / YEAR" },
              { title: "Basic Science", text: "Veer school has an extensive science lab which provides an experimental foundation for the concepts introduced. Students enhance their learning by doing varied experiments which kindles their interest visually and kinesthetically.", img: "src/assets/images/class-3.jpg", age: "12 TO 14 Years", class: "6th TO 8th CLASS", time: "08:00 - 2:00", fee: "Rs 28000 / YEAR" }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img className="card-img-top mb-2" src={item.img} alt="" />
                  <div className="card-body text-center" data-aos="zoom-in">
                    <h4 className="card-title , h1style">{item.title}</h4>
                    <p className="card-text">{item.text}</p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom" data-aos="zoom-in">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Age of Kids</strong>
                      </div>
                      <div className="col-6 py-1">{item.age}</div>
                    </div>
                    <div className="row border-bottom" data-aos="zoom-in">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>CLASS</strong>
                      </div>
                      <div className="col-6 py-1">{item.class}</div>
                    </div>
                    <div className="row border-bottom" data-aos="zoom-in">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>Class Time</strong>
                      </div>
                      <div className="col-6 py-1">{item.time}</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right" data-aos="zoom-in">
                        <strong>Tuition Fee</strong>
                      </div>
                      <div className="col-6 py-1">{item.fee}</div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" data-aos="slide-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2" data-aos="zoom-in">COMPETITIVE EXAMS</span>
              </p>
              <h1 className="mb-4 , h1style" data-aos="zoom-in">
                With the aim of promoting English, Science, Mathematics & Computer Education, veer school has been encouraging children to take up the
              </h1>
              <p data-aos="zoom-in">
                • International Assessment for Indian School (IAIS)-by Macmillan in Partnership with University of New South Wales, Australia.<br />
                • Cambridge English Language assessment – YLE exams<br />
                • NASO Olympiad Exams<br />
                • SOF Olympiad – IEO, IMO, NSO<br />
                • Spell Bee International
              </p>
              <ul className="list-inline m-0">
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" data-aos="zoom-in"></i> veer school MONTHLY COMPETITIONS
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" data-aos="zoom-in"></i> veer school VALUE EDUCATION CLASSES
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" data-aos="zoom-in"></i> veer school CLUB ACTIVITIES, HERITAGE CLUB, ECO-CLUB, SPICE CLUB, QUEST CLUB, THE THEATRE CLUB
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" data-aos="zoom-in"></i> ASSESSMENT In veer school, Assessment is done intermittently and through three different ways - Formative, Interim, Summative.
                </li>
              </ul>
              <a href="#" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
            </div>
            <div className="col-lg-5" id='formsyle'>
            
              <div className="card border-0">
              
              <div id="formstyle1">
              <h2>Book A Seat</h2>
     
      <form data-aos="zoom-in">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <select className="custom-select">
            <option defaultValue>Select A Class</option>
            <option value="1">PLAY</option>
            <option value="2">LKG</option>
            <option value="3">UKG</option>
          </select>
        </div>
        <div>
          <button className="btn btn-submit" type="submit" data-aos="zoom-in">
            Book Now
          </button>
        </div>
      </form>
    </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
   

   {/* // teachers start */}
<div className="container-fluid pt-5" data-aos="zoom-in">
  <div className="container">
    <div className="text-center pb-2">
      <p className="section-title px-5">
        <span className="px-2" data-aos="fade-up">Our Teachers</span>
      </p>
      <h1 className="mb-4 , h1style" data-aos="slide-right">-Meet Our Teachers-</h1>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 text-center team mb-5">
        <div
          className="position-relative overflow-hidden mb-4"
          style={{ borderRadius: '100%' }}
        >
          <img className="img-fluid w-100" src="src\assets\images\hemant.jpg" alt="" />
          <div
            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
          >
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light text-center px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <h4 className='h1style' data-aos="slide-up">Hemant Sheoran</h4>
        <i data-aos="zoom-in">Director</i>
      </div>
      <div className="col-md-6 col-lg-3 text-center team mb-5">
        <div
          className="position-relative overflow-hidden mb-4"
          style={{ borderRadius: '100%' }}
        >
          <img className="img-fluid w-100" src="src\assets\images\principal.jpg" alt="" />
          <div
            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
          >
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light text-center px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <h4 className='h1style'data-aos="slide-up">Mrs Nirmal Singh</h4>
        <i data-aos="zoom-in">Principal</i>
      </div>
      <div className="col-md-6 col-lg-3 text-center team mb-5">
        <div
          className="position-relative overflow-hidden mb-4"
          style={{ borderRadius: '100%' }}
        >
          <img className="img-fluid w-100" src="src\assets\images\principal.jpg" alt="" />
          <div
            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
          >
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light text-center px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <h4 className='h1style' data-aos="slide-up">Mollie Ross</h4>
        <i data-aos="zoom-in">Dance Teacher</i>
      </div>
      <div className="col-md-6 col-lg-3 text-center team mb-5">
        <div
          className="position-relative overflow-hidden mb-4"
          style={{ borderRadius: '100%' }}
        >
          <img className="img-fluid w-100" src="src\assets\images\principal.jpg" alt="" />
          <div
            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
          >
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2 px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light text-center px-0"
              style={{ width: '38px', height: '38px' }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <h4 className='h1style' data-aos="slide-up">Donald John</h4>
        <i data-aos="zoom-in">Art Teacher</i>
      </div>
    </div>
  </div>
</div>
{/* teacher end */}


{/* owl crousel start */}

{/* owl crousel end */}


{/* blog start  */}
<div class="container-fluid pt-5">
      <div class="container">
        <div class="text-center pb-2">
          <p class="section-title px-5">
            <span class="px-2" data-aos="slide-up">VEER INTERNATIONAL SCHOOL</span>
          </p>
          <h1 class="mb-4" data-aos="zoom-in">The Veer  school stands for fortitude and discipline, honing the
skills involved in academics, sports and co-curricular activities. Our aim is to build citizens, India
will be proud of.

</h1>
        </div>
        <div class="row pb-3">
          <div class="col-lg-4 mb-4">
            <div class="card border-0 shadow-sm mb-2">
              <img class="card-img-top mb-2" data-aos="zoom-in" src="src\assets\images\special program.jpg" alt="" />
              <div class="card-body bg-light text-center p-4">
                <h4 class="" data-aos="slide-up">VEER SPECIAL PROGRAMMES AND CAMPS</h4>
                <div class="d-flex justify-content-center mb-3">
                <small class="mr-3"
                    ><i class="fa fa-user text-primary icons1"></i> Admin</small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-folder text-primary icons1"></i> Web_design</small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-comments text-primary icons1"></i> 15</small
                  >
                </div>
                <p data-aos="zoom-in">
                


Keeping the students’ overall development in mind, we have incorporated various programmes into our curriculum. This has brought in a lot of variety in the activities, and students are enjoying it. Some of the programmes include Karadi Path, Physical Health Education, Engage Learning, and the Book Lovers’ Programme(BLP). These initiatives are designed to cater to diverse interests and talents, ensuring that every student finds something they are passionate about. Karadi Path focuses on enhancing language skills through innovative and engaging methods for overall development of kid.
                </p>
                <a href="" class="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card border-0 shadow-sm mb-2">
              <img class="card-img-top mb-2" data-aos="zoom-in" src="src\assets\images\blog-2.jpg" alt="" />
              <div class="card-body bg-light text-center p-4">
                <h4 class="" data-aos="slide-up">VEER SCHOOL INFRASTRUCTURE & AMENITIES</h4>
                <div class="d-flex justify-content-center mb-3">
                  <small class="mr-3"
                    ><i class="fa fa-user text-primary icons1"></i> Admin</small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-folder text-primary icons1"></i> Web_Design</small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-comments text-primary icons1"></i> 15</small
                  >
                </div>
                <p data-aos="zoom-in">
                  LIBRARY,COMPUTER LAB,MATH LAB,SCIENCE LAB,STEAM & ROBOTICS,DIGITAL BOARDS The most important period of life is from birth to the
age of six where most of the learning happens. veer school
initiates this holistic journey which strives to have a
profound effect on the child’s future by providing the
right context of learning through the IEYC.
The IEYC ( International Early Years Curriculum ) is a
research based curriculum that links early years to
formal education. It offers  robust framework for
effective learning, while harnessing a child’s curiosity
in an enabled environment.
                </p>
                <a href="" class="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card border-0 shadow-sm mb-2">
              <img class="card-img-top mb-2" data-aos="zoom-in" src="src\assets\images\blog-3.jpg" alt="" />
              <div class="card-body bg-light text-center p-4">
                <h4 class=""data-aos="slide-up"> VEER PLAY SCHOOL HAVE GOOSEBUMPS LIKE A HOME </h4>
                <div class="d-flex justify-content-center mb-3">
                <small class="mr-3"
                    ><i class="fa fa-user text-primary icons1" ></i> Admin </small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-folder text-primary icons1"></i> Web_Design </small
                  >
                  <small class="mr-3"
                    ><i class="fa fa-comments text-primary icons1"></i> 15 </small
                  >
                </div>
                <p data-aos="zoom-in">
                A home away from home with a hygienic environment for the young ones, play-centric activities foster the major domains of development such as social, emotional, sensory, fine, and gross motor development. We give children new stimulating experiences through good storybooks, ample play materials, music, outings, and a host of events conducted throughout the year. We motivate the children to learn with joy and to become confident, independent, and well-mannered. Our nurturing atmosphere ensures that each child feels safe and valued, allowing them to explore their interests freely.
                </p>
                <a href="" class="btn btn-primary px-4 mx-auto my-2"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* blog end */}

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
  
  )
}



export default Home;
