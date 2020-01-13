import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom';
import { userService } from '../_services';

import meghFlow from '../img/login/MeghFlow_2.1.png'
import user_ico from '../img/login/ico_user.png'
import user_pwd from '../img/login/ico_password.png'

class Login extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() { 
        const { username, password, submitted } = this.state;

        if(this.state.submitted===true)
        {
            window.location.href='/';
        }

        return (  
            
			<div class="hero-image">
            <div class="hero-text">
                <form name="form" class="container1" onSubmit={this.handleSubmit}>
                    <img src={meghFlow} class="login-megnflow-icon"/>
                    <div class="data-text"><span class="aws-text">AWS</span> based Serverless Unified Data Solution
                    </div>

                    <div class="form-group custom-form-group-login">
						<input type="text" className="form-control" name="username" placeholder="Username" value={username} onChange={this.handleChange} placeholder="Username"/>
						
                        <img class="login-text-icon" src={user_ico}/>
                    </div>
                    <div class="form-group custom-form-group-login">
						<input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}  placeholder="Password"/>
                        <img class="login-text-icon" src={user_pwd}/>
                    </div>

                    <button type="submit" class="btn login">LOGIN</button>
                    <div class="forget-pass">Forgot Username / Password?</div>
                    <span class="register">Register</span>
                </form>
            </div>

        </div>
			
             );
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username==='admin' && password==='admin') {
            this.setState({submitted: true });
            localStorage.setItem('token' , 'ewfdfdfdfdsfsdfsdfdsfds');
          return <Redirect to='/dashboard' />
        }
    }
}
 
export default Login;