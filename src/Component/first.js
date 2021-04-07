import React, { Component } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Serving extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="backgroundImg">
                <div className="text p-4 mt-5 w35 text-white">
                    <h1>Serving you since 1989.</h1>
                </div>
                <div className="text mt-5 p-4 w35 text-white">
                    <h2>Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</h2>
                </div>
                <div className="text mb-5 p-4 text-white">
                    <button type="button" class="btn bg-transport text-white border border-white">Shop Merch</button>
                </div>
            </div>
         );
    }
}
 
export default Serving;