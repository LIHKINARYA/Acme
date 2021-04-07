import React, { Component } from 'react';
import './pages2.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="backgroundImg3">
                <div className="text p-2  w40  text-white">
                    <h1>Here at Acme Outdoors</h1>
                </div>
                <div className="text  p-2 text-white">
                    <h2>every dollar counts</h2>
                </div>
                <div className="text p40 p-4 text-white">
                    <p>Acme Outdoors is more than just a company,
                        we're a community of people who care for one another and for our city.
                        During this time, due to shelter in place orders,
                        only a select few of our staff are able to work. 
                        Any donations you make to Acme will help make sure our employees are cared 
                        for and can stay safe in these uncertain times.</p>
                </div>
            </div>
            <div >
                <div className="d-flex flex-column  brd ">
                    <button type="button" className="donate btn button btn-success">Donate $100</button>
                    <button type="button" className="donate btn button btn-success">Donate $50</button>
                    <button type="button" className="donate btn button btn-success">Donate $25</button>
                    <button type="button" className="donate btn button btn-success">Donate $15</button>
                    <button type="button" className="donate btn button btn-success">Donate $5</button>
                </div>
            </div>




            </div> 
        );
    }
}
 
export default Donate;