import React, { Component } from 'react';

import { Link , Redirect } from 'react-router-dom'; 

class List extends Component {
    constructor(props) {
        super(props);
   
        const token = localStorage.getItem('token'); 
        console.log(token);

        let loggegIn = true;
        if(token===null)
        {
            loggegIn = false;
        }
        this.state = {
            loggegIn,
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

        if(this.state.loggegIn==false)
        {
            return <Redirect to='/login' />
        }
        
		const {error, isLoaded, databases} = this.state;

		if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
			<div>
            <section id="intro" className="intro">
            <div className="intro-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
				  
				  <table class="table table-striped ">
					  <thead class="thead-dark">
						<tr>
						  <th scope="col">#</th>
						  <th scope="col">database</th>
						  <th scope="col">Conn type</th>
						  <th scope="col">created By</th>
						</tr>
					  </thead>
					  <tbody>
						
						{
                        databases.map(databases => (
                            <tr key={databases.id}>
							  <td>{databases.dbId}</td>	
							  <td>{databases.database}</td>
							  <td>{databases.conType}</td>
							  <td>{databases.createdBy}</td>
						</tr>
						
                        ))
						}
						
						
					  </tbody>
					</table>
				
				</div>
                </div>
              </div>
            </div>
            </section>
          </div>
            );
        }    
    }
}
 
export default List;