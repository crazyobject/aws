import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import List from './components/list';
import NewConnection from './components/newconnection';
import Logout from './components/logout';
import Footer from './components/footer';
import './css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css';
import './css/style.css';
import './color/default.css';
import Header from './components/header';
import { PrivateRoute } from './components/privateroute';
import history from './history';

import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
function App() {
  const logouturl = '/logout';
  return (
    <div>
    <div id="wrapper">
   

      <Router  history={ history } >
      <Header />
            <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
		      	<Route path="/NewConnection" component={NewConnection} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
		   	    <PrivateRoute path="/List" component={List} />
            
            </Switch>
      </Router>
    <Footer />
    
   </div>
   <a href="#" className="scrollup"><i className="fa fa-angle-up active"></i></a>
   </div>
   

  );
  
}

export default App;
