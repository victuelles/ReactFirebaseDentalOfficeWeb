import React from 'react';
import Iframe from 'react-iframe'

const ContactPage = () => 
<section id="contact">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Contact Us</h2>
      <h3 className="section-subheading ">We will be glad to hear from you whether you have a question or when you are ready to make an appointment.
      </h3>
     
    </div>
  </div>
 
  <div className="row">
    <div className="col-lg-6" style={{fontSize:"1.2em"}}>
   < h3>Office Hours</h3>
    <p><strong>Monday: &nbsp;</strong ><span style={{color:"white",fontSize:"1em"}}> 11am-7pm</span><br/>
<strong>Tuesday:&nbsp;</strong> <span style={{color:"white",fontSize:"1em"}}> 11am-7pm</span><br/>
<strong>Wednesday:&nbsp;</strong> <span style={{color:"white",fontSize:"1em"}}> 11am-7pm</span><br/>
<strong>Thursday:&nbsp;</strong> <span style={{color:"white",fontSize:"1em"}}> 11am-7pm</span><br/>
<strong>Friday:&nbsp;&nbsp;</strong> <span style={{color:"white",fontSize:"1em"}}> 11am-7pm </span><br/>
<span style={{color:"white",fontSize:"1em"}}><em>Closed every other Friday</em></span><br/>
<strong>Saturday:&nbsp;</strong><span style={{color:"white",fontSize:"1em"}}> 10am-4pm</span><br/>
<span style={{color:"white",fontSize:"1em"}}><em>Closed every other Saturday</em></span><br/>
<strong>Sunday:&nbsp;</strong> <span style={{color:"white",fontSize:"1em"}}><em>Closed</em></span></p>
    
    </div>
  <div className="col-lg-6">
  < h3>Contact and Location:</h3><br/>
  <p><strong>Phone : </strong> <a href="tel:5107963411"  style={{color:"white",fontSize:"1em"}}>(510) 796-3411</a></p>
  <p><strong>Email :&nbsp;</strong><a href="mailto:inquire@rosemontfamilydental.com"  style={{color:"white",fontSize:"1em"}}>inquire@rosemontfamilydental.com</a></p>
  <h5 style={{color:"white",fontWeight:"normal"}}>35124 Newark Blvd, Newark, CA 94560</h5> 
  <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3163.227441179206!2d-122.0491244!3d37.5497049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x780f696268c64924!2sRosemont+Family+Dental+Care!5e0!3m2!1sen!2sus!4v1542309339738"
                width="500px"
                height="300px"
                id="myMap"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>
 
  </div>
  </div>
 


</div>
</section>

export default ContactPage