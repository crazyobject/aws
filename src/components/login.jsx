import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom';
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
            return <Redirect to='/' />
        }

        return (  
            <section id="intro" className="intro">
            <div className="intro-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
      
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