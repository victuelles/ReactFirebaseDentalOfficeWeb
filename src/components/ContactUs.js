import React from 'react';

const ContactPage = () => 
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

export default ContactPage