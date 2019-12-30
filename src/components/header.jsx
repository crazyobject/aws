import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../img/logo.png'
import { Link , Redirect } from 'react-router-dom';
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
          console.log('here');
         
        }

        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
      
	  <div className="container navigation">
        <div className="navbar-header page-scroll">
          <a className="navbar-brand" href="index.html">
                    <img src={logo} alt="" height="40" />
                </a>
        </div>
        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Connection <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="create-new.html">Create new</a></li>
                <li><a href="table-list.html">list</a></li>
                <li><a href="index-video.html">3</a></li>
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
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <p className="bold text-left">
				<a href="#">Home</a> > 
				<a href="#">Database Connection</a>
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
    this.setState({isLogout: true });
    localStorage.removeItem('token');
   
  }
}
export default Header;