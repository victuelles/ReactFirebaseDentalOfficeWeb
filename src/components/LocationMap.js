import React from 'react'

const LocationMap=()=>
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


export default LocationMap