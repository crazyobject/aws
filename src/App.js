import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Logout from './components/logout';
import Footer from './components/footer';
import './css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css';
import './css/style.css';
import './color/default.css';
import logo from './img/logo.png'
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
function App() {
  const logouturl = '/logout';
  return (
    <div>
    <div id="wrapper">

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
      <li className="separator dropdown">
  
      
 
			</li>
     
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

      <Router>
            <Switch>
           
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            
            </Switch>
      </Router>
    <Footer />
    
   </div>
   <a href="#" className="scrollup"><i className="fa fa-angle-up active"></i></a>
   </div>
   

  );
}

export default App;
