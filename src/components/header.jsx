import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../img/logo.png'
import megaflow from '../img/megflow.png'
import { Link , Redirect , withRouter } from 'react-router-dom';
import history from '../history';


class Header extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
           isLogout : false
        };
        this.logout = this.logout.bind(this);
    }

    render() {
        if(this.state.isLogout===true)
        {
          
          return  this.props.history.push('/login');
         
        }

        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
      
	  <div className="navigation nav-margin">
        <div className="navbar-header page-scroll">
          <a class="navbar-brand icon-xoriant" href="index.html">
                    <img src={logo} alt="" />
              </a>
              <a class="navbar-brand icon-logo" href="index.html">
                  <img src={megaflow} alt="" />
            </a>
        </div>
        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle connection-dropdown" data-toggle="dropdown">Connection <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="NewConnection">Create new</a></li>
                <li><a href="List">list</a></li>
              </ul>
            </li>
			<li className="separator">
				<i className="fa fa-bell" title="Notification"></i>
			</li>
			<li className="separator dropdown">
				<i className="fa fa-user" title="User"></i>
			</li>
      <li className="separator dropdown" onClick={this.logout}>Logout</li>
     
          </ul>
        </div>

      </div>
	  
	  <div className="top-area">
        <div className="container nav-breadscrum">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <p className="bold text-left">
				<a href="#" class="nav-breadscrum-name">Home</a> 
        <span class="nav-breadscrum-name"> > </span> 
				<a href="#"  class="nav-breadscrum-name">Database Connection</a>
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
    window.location.reload(true);
   
  }
}
export default Header;