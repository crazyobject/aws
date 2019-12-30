import React, { Component } from 'react';
import nodblogo from '../img/no-db.png';
import { Link , Redirect } from 'react-router-dom'; 

class Dashboard extends Component {
    constructor(props) {
        super(props);
   
        const token = localStorage.getItem('token'); 
        console.log(token);

    }
    render() { 
        
        return ( 
            <div>
            <section id="intro" className="intro">
            <div className="intro-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                      <center><img src={nodblogo} /></center>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>
         );
    }
}
 
export default Dashboard;