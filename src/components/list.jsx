import React, { Component } from 'react';
import dbImg from '../img/oracle.jpg'
import { Link , Redirect } from 'react-router-dom'; 
import '../css/list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
			error : null,
            isLoaded : false,
            databases : []  
        }
		
    }
	/*
	collect the data from the API
	state life cycle method
	*/
	 componentDidMount() 
    {
      fetch("http://localhost:3000/mockjson/dblist.json")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    databases : result
                });
            },
            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )

    }
	
    render() {         
		const {error, isLoaded, databases} = this.state;

		if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
			
			
			
			<div>
      <section id="intro" class="intro">

		<div class="intro-content create-intro-content">
		</div>

		<div class="container-list">
			<div class="row">
				<div class="col-12">
					<div class="list-header-text">Connections(2)</div>
					<button type="button" class="btn  create-connection-btn">
						<a href="NewConnection"><span class="btn-text">Create New Connections</span></a>
					</button>
					<div class="delete ">
						<span class="delete-text">Delete</span>
					</div>
				</div>
			</div>
		</div>
		
<div class="container-fluid">
        <div class="row no-margin ">
          <div class="col-sm-1">
            <div class="checkbox t-heading sr-no-margin" >
              <label>
                <input type="checkbox" />
                <span class=" sr-no">Sr</span>
              </label>
            </div>
          </div>
          <div class="col-sm-3 pad-top">
            <div class="t-heading">Source DB 
                <img src="img/up-down.png"  class="img-arrow"  />
              <span><i class="fa fa-filter" aria-hidden="true"></i></span>
            </div>
            
          </div>
          <div class="col-sm-3 pad-top pad-left-dest">
              <div class="t-heading">Destination DB  
                  <img src="img/up-down.png"  class="img-arrow"  />
                <span><i class="fa fa-filter" aria-hidden="true"></i></span>
              </div>
          </div>
          <div class="col-sm-2 pad-top pad-left-created">
              <div class="t-heading">Created by 
                  <img src="img/up-down.png"  class="img-arrow"  />
                  <span><i class="fa fa-filter" aria-hidden="true"></i></span>
                </div>
          </div>
          <div class="col-sm-2 pad-top last-updates">
              <div class="t-heading">Last updates  
                  <img src="img/up-down.png"  class="img-arrow"  />
                  <span><i class="fa fa-filter" aria-hidden="true"></i></span>
              </div>
          </div>
          <div class="col-sm-1 pad-top action-header">
              <div class="t-heading no-border-right">Actions 
                
              </div>
          </div>
        
        </div>
			{ databases.map(databases => (
		  <div class="row row-spacing no-margin-top" key={databases.id}>
			<div class="col-sm-1">
			  <div class="checkbox">
				<label>
				  <input type="checkbox" />
				  <span class="unique-id">1</span>
				</label>
			  </div>
			</div>
			<div class="col-sm-3 connection-pad-left">
			  <span class="image-logo">
				<img src={dbImg} alt=""/>
			  </span>
			  <div class="connection-wrapper">
				<div class="main-text"> {databases.dbId}</div>
				<div class="sub-text">IP - 192.168.0</div>
			  </div>

			</div>
			<div class="col-sm-3 connection-pad-left">
			  <span class="image-logo">
			   <img src={dbImg} alt="DB"/>
			  </span>
			  <div class="connection-wrapper">
				<div class="main-text"> {databases.conType}</div>
				<div class="sub-text">IP - 192.168.0</div>
			  </div>
			</div>
			<div class="col-sm-2">
			  <div class="main-text">{databases.createdBy}</div>
			  <div class="sub-text">{databases.createdDate}</div>
			</div>
			<div class="col-sm-2">
			  <div class="main-text">{databases.lastUpdate}</div>
			  <div class="sub-text">11:55 AM</div>
			</div>
			<div class="col-sm-1 edit-delete">
			  <span class="action edit">Edit</span><span class="separator-dash">|</span>
			  <span class="action">Delete</span>
			</div>
		  </div>

		   ))}
		   </div>
	
    </section>
              
       </div>
            );
        }    
    }
}
 
export default List;