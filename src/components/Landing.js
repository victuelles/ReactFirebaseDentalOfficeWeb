import React from 'react';
import Iframe from 'react-iframe'

const Landing = () => 
<React.Fragment>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">"Don't let pain or absence of it, be your guide to your oral wellness"</div>
          <div className="section-heading text-uppercase " style={{color:"orange"}}>We speak <b>Tagalog, Ilocano, Pangasinan</b>. <b>Se Habla Espanol!</b></div>
          <br/>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">UNDER CONSTRUCTION.... WILL BE UP SOON</a>
        </div>
      </div>
    </header>
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">We are conveniently located located at the heart of Newark and serving areas of Union City, Fremont, Milpitas, Hayward, San Leandro and Castro valley.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-child fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Pediatric Dentistry</h4>
            <p className="text-muted">We have extensive experience communicating with kids and performing dental procedures in a way that’s comfortable for them. We’re dedicated to making your child’s experience as pleasant as possible.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-smile fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Restorative/Cosmetic Dentistry</h4>
            <p className="text-muted">Passionate about delivering the highest level of care to patients. We specializes in treatments such as digital reconstructions, aesthetic dentistry and Implant dentistry. Focusing on regeneration and restoring tooth structure that has been lost over time.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-tooth fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Extraction</h4>
            <p className="text-muted">Performed by a dentist and is a relatively quick outpatient procedure with either local, general, intravenous anesthesia, or a combination. Removing visible teeth is a simple extraction. </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Since 1995, Rosemont Family Dental Care has been providing cosmetic, sedation and comprehensive dentistry to the Newark and Bay Areas.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>1995</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">New office location</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be part of
                    <br/>our growing
                    <br/>clients!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<section id="insurances">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Insurances</h2>
      <h3 className="section-subheading text-muted">Accepts the Following Insurance</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <ul className=" ">
        <li>
            <h4>Aetna</h4>
            <div className="timeline-body">
              <p className="text-muted">Aetna DPPO</p>
            </div>
        </li>
        <li>
            <h4>Ameritas</h4>
            <div className="timeline-body">
              <p className="text-muted">Ameritas PPO</p>
            </div>
        </li>
        <li>
            <h4>Assurant</h4>
            <div className="timeline-body">
              <p className="text-muted">Assurant DHA /  Assurant DHA Premier</p>
            </div>
        </li>
        <li>
            <h4>Blue Cross California</h4>
            <div className="timeline-body">
              <p className="text-muted">BCCA Dental Blue 100/200/300</p>
            </div>
        </li>
        <li>
            <h4>Blue Shield California</h4>
            <div className="timeline-body">
              <p className="text-muted">BSCA Dental PPO</p>
            </div>
        </li>
        <li>
            <h4>Cigna Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">CIGNA Radius Network / CIGNA Total DPPO</p>
            </div>
        </li>
        <li>
            <h4>CompBenefits</h4>
            <div className="timeline-body">
              <p className="text-muted">CompBenefits PPO</p>
            </div>
        </li>
        <li>
            <h4>Delta Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">Delta Dental PPO / Delta Dental Premier</p>
            </div>
        </li>
        <li>
            <h4>Dental Network of America</h4>
            <div className="timeline-body">
              <p className="text-muted">Dental Network of America DPPO</p>
            </div>
        </li>
        <li>
            <h4>DenteMax</h4>
            <div className="timeline-body">
              <p className="text-muted">DenteMax Dental</p>
            </div>
        </li>
      </ul>
    </div>
    <div className="col-lg-6">
      <ul className=" ">
         <li>
            <h4>First Dental Health</h4>
            <div className="timeline-body">
              <p className="text-muted">First Dental Health</p>
            </div>
        </li>
      <li>
            <h4>Guardian Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">Guardian Dental</p>
            </div>
        </li>
        <li>
            <h4>Humana Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">Humana Dental PPO</p>
            </div>
        </li>
        <li>
            <h4>Liberty Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">Liberty Dental CA Independence PPO</p>
            </div>
        </li>
        <li>
            <h4>Principal Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">Principal Dental PPO</p>
            </div>
        </li>
        <li>
            <h4>United Concordia</h4>
            <div className="timeline-body">
              <p className="text-muted">United Concordia Advantage Plus PPO</p>
              <p className="text-muted">United Concordia Alliance</p>
              <p className="text-muted">United Concordia National Fee-For-Service</p>
            </div>
        </li>
        <li>
            <h4>United Healthcare Dental</h4>
            <div className="timeline-body">
              <p className="text-muted">United Healthcare Dental PPO</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>

    <section className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Our staff consists of dedicated individuals who are kind, friendly and caring.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/person_placeholder.jpg" alt=""/>
              <h4>Sofronio T. Banatao, DDS</h4>
              <p className="text-muted">Dentist</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/person_placeholder.jpg" alt=""/>
              <h4>Leovy Velasco, DDS</h4>
              <p className="text-muted">Dentist</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/person_placeholder.jpg" alt=""/>
              <h4>Arlene C. Fernandez</h4>
              <p className="text-muted">Dental Hygienist</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
             <img className="mx-auto rounded-circle" src="img/team/group_placeholder.png" alt=""/>
          </div>
          </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Our team includes experienced and energetic people whose goal is to communicate with our patients to provide the best care possible.</p>
          </div>
        </div>
      </div>
    </section>
        <section id="maps">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Location Map</h2>
            <h3 className="section-subheading text-muted">Get directions to this location</h3>
            </div>
        </div>
          <div className="row">
          <div className="col-lg-12 text-center">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3163.227441179206!2d-122.0491244!3d37.5497049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x780f696268c64924!2sRosemont+Family+Dental+Care!5e0!3m2!1sen!2sus!4v1542309339738"
                width="600px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
            </div>
       </div>
      </div>
    </section>
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">We will be glad to hear from you whether you have a question or when you are ready to make an appointment.
            </h3>
            <h4>For general questions, please feel free to use the form below.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="noValidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." ></input>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
 
export default Landing;