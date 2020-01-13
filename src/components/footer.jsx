import React, { Component } from 'react'

 class Footer extends Component {
    render() {
		if (window.location.pathname === '/login') return null;
        return (
                <footer>
                <div className="sub-footer">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="text-left">
                        <p>&copy;Copyright - Xoriant</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="wow fadeInRight" data-wow-delay="0.1s">
                        <div className="text-right">
                        <div className="credits">
                            2020
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        )
    }
}
export default Footer