import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {

    constructor(props) {
        super(props);
      localStorage.removeItem("token");
    }
    render() {
        window.location.href='/login';
        return (
            <div>
                
            </div>
        )
    }
}
