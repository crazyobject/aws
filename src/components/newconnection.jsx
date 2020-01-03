import React, { Component } from 'react';

import { Link , Redirect } from 'react-router-dom'; 

class NewConnection extends Component {
    constructor(props) {
        super(props);
   
        const token = localStorage.getItem('token'); 
        
        let loggegIn = true;
        
		if(token===null)
        {
            loggegIn = false;
        }
        this.state = {
            loggegIn,
        }
		
    }
	
    render() { 

        if(this.state.loggegIn==false)
        {
            return <Redirect to='/login' />
        }
        
		const {error, isLoaded, databases} = this.state;

            return(
			<div>
            <section id="intro" class="intro">
      <div class="intro-content create-intro-content">
      <div class="create-main-content connection-container">
      <div class="row">
        <div class ="col-sm-12">
          <div class="create-new-header">Create New Connection
            <span class ="reset"><img class ="cross-icon" src="img/cancel.png"/>Reset</span>
          </div>
          <hr/>
          <div class ="col-sm-2"></div>
          <div class ="col-sm-5 source-conn-heading pad-0">Source</div>
          <div class ="col-sm-5 source-conn-heading">Destination</div>
          <form action="" method="post" role="form" class="createForm lead form-horizontal">
         
      <div class="form-group">
                  <label class="control-label col-sm-3" for="dbtype">Database Type<span class="required">*</span></label>
                  <div class="col-sm-4 source-part">
                      <div class="dropdown source-db-dropdown">
                          <select id="source-db-type" required>
                              <option value="">Select</option>
                              <option value="volvo">Oracle</option>
                              <option value="saab">MySql</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Informatica</option>
                            </select>
                         
                  </div>
                  </div>
                  <div class="col-sm-4 destination-part">
                      <div class="dropdown source-db-dropdown">
                          <select id="dest-db-type" required>
                              <option value="">Select</option>
                              <option value="volvo">Oracle</option>
                              <option value="saab">MySql</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Informatica</option>
                            </select>
                        </div>
                    </div>
                  
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" for="name">Name<span class="required">*</span></label>
                  <div class="col-sm-4 form-groups source-part">
                    <input type="text" class="form-control control-group" name="sourcename"id="name" placeholder="Enter Name" data-rule="minlen:10" data-msg="Please enter at least 3 chars"/>
                    <div class="validation"></div>
                  </div>
                  <div class="col-sm-4 form-groups destination-part">
                      <input type="text" class="form-control control-group"  name="destinationname" id="name" placeholder="Enter Name" data-rule="minlen:10" data-msg="Please enter at least 3 chars"/>
                      <div class="validation"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="ipaddress">Database HOST/IP Address<span class="required">*</span></label>
                    <div class="col-sm-4 form-groups source-part">
                        <input type="radio" name="host"class="control-group" value=""/> 
                        <input  type="text" class="form-control host-address-field control-group" placeholder="Enter HOST"/>
                        <input type="radio" class="control-group" name="host" value=""/> 
                        <input type="text"  class="form-control host-address-field control-group" placeholder="Enter IP Address" />
                        <div class="validation"></div>
                      </div>
                    <div class="col-sm-4 form-groups destination-part">
                        <input type="radio" name="host" class="control-group" value=""/>
                        <input  type="text" class="form-control host-address-field control-group"  placeholder="Enter HOST" />
                        <input type="radio" name="host" class="control-group" value="" /> 
                        <input type="text"  class="form-control host-address-field control-group"  placeholder="Enter IP Address" />
                        <div class="validation"></div>
                      </div>
                  </div>
                 
              <div class="form-group">
                        <label class="control-label col-sm-3" for="schemaname">Database Schema Name<span class="required">*</span></label>
                        <div class="col-sm-4 form-groups source-part">
                          <input type="text" class="form-control control-group" id="schemaname" placeholder="Enter Schema Name" data-rule="minlen:10" data-msg="Please enter valid schema name"/>
                          <div class="validation"></div>
                        </div>
                        <div class="col-sm-4 form-groups destination-part">
                            <input type="text" class="form-control control-group" id="schemaname" placeholder="Enter Schema Name" data-rule="minlen:10" data-msg="Please enter valid schema name"/>
                            <div class="validation"></div>
                          </div>
                      </div>
                      <div class="form-group">
                          <label class="control-label col-sm-3" for="port">Port<span class="required">*</span></label>
                          <div class="col-sm-4 form-groups source-part">
                            <input type="text" class="form-control control-group" id="port" placeholder="Enter Port" data-rule="minlen:10" data-msg="Please enter valid port number"/>
                            <div class="validation"></div>
                          </div>
                          <div class="col-sm-4 form-groups destination-part">
                              <input type="text" class="form-control control-group" id="port" placeholder="Enter Port" data-rule="minlen:10" data-msg="Please enter valid port number"/>
                              <div class="validation"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3" for="username">Username<span class="required">*</span></label>
                            <div class="col-sm-4 form-groups source-part">
                              <input type="text" class="form-control control-group username-width" id="username" placeholder="Enter Username" data-rule="minlen:10" data-msg="Please enter valid user name"/>
                              <div class="validation"></div>
                            </div>
                            <div class="col-sm-4 form-groups destination-part">
                                <input type="text" class="form-control control-group username-width" id="username" placeholder="Enter Username" data-rule="minlen:10" data-msg="Please enter valid user name"/>
                                <div class="validation"></div>
                              </div>
                          </div>
                          <div class="form-group">
                              <label class="control-label col-sm-3" for="pwd">Password<span class="required">*</span></label>
                              <div class="col-sm-4 form-groups source-part">
                                <input type="password" class="form-control control-group username-width" id="pwd" placeholder="Enter Password" data-rule="minlen:10" data-msg="Please enter valid password"/>
                                <div class="validation"></div>
                              </div>
                              <div class="col-sm-4 form-groups destination-part">
                                  <input type="password form-groups" class="form-control control-group username-width" id="pwd" placeholder="Enter Password" data-rule="minlen:10" data-msg="Please enter valid password"/>
                                  <div class="validation"></div>
                                </div>
                            </div>
                            <div class="form-group test-connection-pad">
                              <div class="col-sm-6">
                                <div class="col-sm-5">

                                </div>
                                <div class="col-sm-6 source-test-connection">
                                   <span class="create-text">Test your sql to create connection</span>
                                   <br/>
                                   <button type="" class="btn btn-primary source-test-conn-btn">Test Connection</button>
                                  </div>
                              </div>
                              <div class="col-sm-6">
                                  <div class="col-sm-1">

                                    </div>
                                    <div class="col-sm-6 dest-test-connection">
                                        <span class="create-text">Test your sql to create connection</span>
                                        <br/>
                                        <button type="" class="btn btn-primary dest-test-conn-btn">Test Connections</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="form-group btn-create">
                                <div class="col-md-8">
                   
                                  </div>
                                 
                               <div class="col-md-4">
                                  <button type="submit" class="btn btn-primary create-conn-btn">Create Connection</button>
                                </div>
                              </div>
           </form>
          </div> 
      </div>
      </div>
    </div>
    </section>
          </div>
            );
    }
}
 
export default NewConnection;