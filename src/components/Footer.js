import React from 'react';
import {Link} from 'react-router-dom'


const FooterPage = () => 
<footer>
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <span className="copyright">Copyright &copy; RosemontFamilyDental.com 2018</span>
    </div>
    <div className="col-md-4">
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
    <div className="col-md-4">
      <ul className="list-inline quicklinks">
        <li className="list-inline-item">
          <Link to="/">Privacy Policy </Link> 
        </li>
        <li className="list-inline-item">
        <Link to="/"> Terms of Use</Link> 
        </li>
      </ul>
    </div>
  </div>
</div>
</footer>
  
export default FooterPage;