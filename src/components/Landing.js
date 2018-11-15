import React from 'react'
import ContactPage from './Contact'
import ServicesPage from './ServicesPage'
import InsurancePage from './InsurancePage'
import TeamPage from './TeamPage'
import Iframe from 'react-iframe'

const Landing = () => 
<React.Fragment>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">"Don't let pain or absence of it, be your guide to your oral wellness"</div>
          
          <br/>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Learn more</a>
          <br/>  <br/>  <br/>
          <div className="section-heading text-uppercase " style={{color:"navy",fontSize:'1.2em'}}>We speak <b>Tagalog, Ilocano, Pangasinan</b>.<p><b> Se Habla Espanol!</b></p></div>
        </div>
      </div>
    </header>

  <ServicesPage/>
  <InsurancePage/>

   <TeamPage/>
        
    <ContactPage/>
    </React.Fragment>
 
export default Landing;