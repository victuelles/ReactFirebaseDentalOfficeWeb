import React from 'react'

const ServicesPage=()=>
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



export default ServicesPage