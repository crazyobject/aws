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
	/*
      fetch("https://0xaiw5eve3.execute-api.us-east-2.amazonaws.com/testdev",{
	  method: 'POST',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		operation: 'LIST'
	  })
	  });	
	*/
      fetch("http://localhost:3000/mockjson/dblist.json")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
               console.log("Resulyt" , result.responseText);
                this.setState({
                    isLoaded : true,
                    databases : result.responseText
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
      <section id="intro" className="intro">

		<div className="intro-content create-intro-content">
		</div>

		<div className="container-list">
			<div className="row">
				<div className="col-12">
					<div className="list-header-text">Connections({this.state.databases.length})</div>
					<button type="button" className="btn  create-connection-btn">
						<a href="NewConnection"><span className="btn-text">Create New Connections</span></a>
					</button>
					<div className="delete ">
						<span className="delete-text">Delete</span>
					</div>
				</div>
			</div>
		</div>
		
<div className="container-fluid">
        <div className="row no-margin ">
          <div className="col-sm-1">
            <div className="checkbox t-heading sr-no-margin" >
              <label>
                <input type="checkbox" />
                <span className=" sr-no">Sr</span>
              </label>
            </div>
          </div>
          <div className="col-sm-3 pad-top">
            <div className="t-heading">Source DB 
                <img src="img/up-down.png"  className="img-arrow"  />
              <span><i className="fa fa-filter" aria-hidden="true"></i></span>
            </div>
            
          </div>
          <div className="col-sm-3 pad-top pad-left-dest">
              <div className="t-heading">Destination DB  
                  <img src="img/up-down.png"  className="img-arrow"  />
                <span><i className="fa fa-filter" aria-hidden="true"></i></span>
              </div>
          </div>
          <div className="col-sm-2 pad-top pad-left-created">
              <div className="t-heading">Created by 
                  <img src="img/up-down.png"  className="img-arrow"  />
                  <span><i className="fa fa-filter" aria-hidden="true"></i></span>
                </div>
          </div>
          <div className="col-sm-2 pad-top last-updates">
              <div className="t-heading">Last updates  
                  <img src="img/up-down.png"  className="img-arrow"  />
                  <span><i className="fa fa-filter" aria-hidden="true"></i></span>
              </div>
          </div>
          <div className="col-sm-1 pad-top action-header">
              <div className="t-heading no-border-right">Actions 
                
              </div>
          </div>
        
        </div>
			{ databases.map(databases => (
		  <div className="row row-spacing no-margin-top" key={databases.uniqueID}>
			<div className="col-sm-1">
			  <div className="checkbox">
				<label>
				  <input type="checkbox" />
				  <span className="unique-id">1</span>
				</label>
			  </div>
			</div>
			<div className="col-sm-3 connection-pad-left">
			  <span className="image-logo">
				<img src={dbImg} alt=""/>
			  </span>
			  <div className="connection-wrapper">
				<div className="main-text"> {databases.sourceDB}</div>
				<div className="sub-text">{databases.sourceIP}</div>
			  </div>

			</div>
			<div className="col-sm-3 connection-pad-left">
			  <span className="image-logo">
			   <img src={dbImg} alt="DB"/>
			  </span>
			  <div className="connection-wrapper">
				<div className="main-text"> {databases.destDB}</div>
				<div className="sub-text">{databases.destIP}</div>
			  </div>
			</div>
			<div className="col-sm-2">
			  <div className="main-text">{databases.createdBy}</div>
			  <div className="sub-text">{databases.createdDate}</div>
			</div>
			<div className="col-sm-2">
			  <div className="main-text">{databases.lastUpdate}</div>
			  <div className="sub-text">11:55 AM</div>
			</div>
			<div className="col-sm-1 edit-delete">
			  <span className="action edit">Edit</span><span className="separator-dash">|</span>
			  <span className="action">Delete</span>
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