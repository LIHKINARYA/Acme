import React, { Component } from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { BsChatSquare } from "react-icons/bs";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="backgroundImg5">
                    <div className="text p-3 mar w45 text-white">
                        <h1>Your Adventure Awaits</h1>
                    </div>
                    <div className="text p-3 w45 text-white">
                        <p>Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.</p>
                    </div>
                    <div className="text  w45 pb-5 text-white pad2">
                        <button type="button" class="btn bg-transport text-white border border-white">Shop Merch</button>
                    </div>
                </div>
                <div className="w35 txt">
                    <p>WHY ACME OUTDOORS?</p>
                    <h2>We’re the best in the business.</h2>
                    <p>From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.</p>
                </div>

                <div>
                <div class="card-group">
                        <div class="card">
                            <div class="card-body">
                                <a><AiOutlineSafetyCertificate /></a>
                            <h5 class="card-title">Lifetime Warranty</h5>
                            <p class="card-text">All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                            </div>

                        </div>
                        <div class="card">
                            <div class="card-body">
                                <a><AiOutlineShopping/></a>
                            <h5 class="card-title">Shopping Experience</h5>
                            <p class="card-text">All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                            </div>
                            
                        </div>
                        <div class="card">
                            <div class="card-body">
                            <a><FiTruck/></a>
                            <h5 class="card-title">On-time Delivery</h5>
                            <p class="card-text">All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                            </div>
                            
                        </div>
                        <div class="card">
                            <div class="card-body">
                            <a><BsChatSquare/></a>
                            <h5 class="card-title">Best in Class Service</h5>
                            <p class="card-text">All our products — whether we make them or not — are backed by our lifetime warranty.</p>
                            </div>
                            
                        </div>

                        </div>
                </div>



            </div>
         );
    }
}
 
export default About;