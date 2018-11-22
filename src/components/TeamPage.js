import React from 'react'

const TeamPage=()=>
<section className="bg-light" id="team">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
      <h3 className="section-subheading text-muted">Our staff consists of dedicated individuals who are kind, friendly and caring.</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-6">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/dentist_banatao.jpg" alt=""/>
        <h4>Sofronio T. Banatao, DDS</h4>
        <p className="text-muted">Dentist</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
           
              <i className="fab fa-twitter"></i>
           
          </li>
          <li className="list-inline-item">
          
              <i className="fab fa-facebook-f"></i>
            
          </li>
          <li className="list-inline-item">
           
              <i className="fab fa-linkedin-in"></i>
            
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/dentist_velasco.jpg" alt=""/>
        <h4>Leovy Velasco, DDS</h4>
        <p className="text-muted">Dentist</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            
              <i className="fab fa-twitter"></i>
            
          </li>
          <li className="list-inline-item">
           
              <i className="fab fa-facebook-f"></i>
            
          </li>
          <li className="list-inline-item">
            
              <i className="fab fa-linkedin-in"></i>
            
          </li>
        </ul>
      </div>
    </div>
   
 </div>
 <div className="row">
    <div className="col-lg-8 mx-auto text-center staff_image">
       <img className="object-fit_cover mx-auto img-responsive" src="img/team/group_staff.jpg" alt=""/>
    </div>
 </div>
 <br/>
  <div className="row">
    <div className="col-lg-8 mx-auto text-center">
      <p className="large text-muted">Our team includes experienced and energetic people whose goal is to communicate with our patients to provide the best care possible.</p>
    </div>
  </div>
</div>
</section>


export default TeamPage