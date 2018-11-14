import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './Navigation'
import LandingPage from './Landing'
import Footer from './Footer'
import * as routes from '../constants/routes'
import './App.css';
const App = () => 
  <Router>
    <div id="page-top">
        <Navigation />

        <Route 
          exact path={routes.LANDING} component={()=><LandingPage/>} 
        />
        <Footer/>
    
      </div>
     
  </Router>

 
export default App
