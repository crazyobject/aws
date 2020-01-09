import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../img/logo.png'
import megaflow from '../img/megflow.png'

import { BrowserRouter as Router , Redirect , withRouter , Link} from 'react-router-dom';
import history from '../history';


class Header extends Component {
    constructor(props) {
        super(props);
       
        const islogout = localStorage.getItem('token')===null ? false : true;
        this.state = {
           isLogout :  islogout
        };
        console.log("here" , this.state);
        this.logout = this.logout.bind(this);
    }


    render() {
     console.log('ddd',this.state);
        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
      
	  <div className="navigation nav-margin">
        <div className="navbar-header page-scroll">
          <a className="navbar-brand icon-xoriant" href="index.html">
                    <img src={logo} alt="" />
              </a>
              <a className="navbar-brand icon-logo" href="index.html">
                  <img src={megaflow} alt="" />
            </a>
        </div>
        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle connection-dropdown" data-toggle="dropdown">Connection <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="/NewConnection">Create new</a></li>
                <li> <Link to="/list">List</Link> </li>
			        	<li> <Link to="/logout">Logout</Link> </li>
              </ul>
            </li>
			<li className="separator">
				<i className="fa fa-bell" title="Notification"></i>
			</li>
			<li className="separator dropdown">
				<i className="fa fa-user" title="User"></i>
			</li>
          </ul>
        </div>

      </div>
	  
	  <div className="top-area">
        <div className="container nav-breadscrum">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <p className="bold text-left">
				<a href="#" className="nav-breadscrum-name">Home</a> 
        <span className="nav-breadscrum-name"> > </span> 
				<a href="#"  className="nav-breadscrum-name">Database Connection</a>
			  </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
        )
    }

   logout()
  {
    
    localStorage.removeItem('token');
    window.location.location('/login');
   
  }
}
export default Header;