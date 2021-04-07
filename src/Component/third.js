import React, { Component } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Third extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="mx-5">
            <p className="mt-5">SHOP PRODUCTS</p>
            <h1 className="mb-4">Open 24/7/365.</h1>

            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body bg-white">
                                    <h5 class="card-title">White Tent</h5>
                                    <p class="card-text"><b>$200.00 USD</b></p>
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body bg-white">
                                    <h5 class="card-title mt-4">Tin Coffee Tumbler</h5>
                                    <p class="card-text"><b>$35.00 USD</b></p>
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body bg-white">
                                    <h5 class="card-title">Blue Canvas Pack </h5>
                                    <p class="card-text"><b>$95.00 USD</b></p>
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                                </div>
                         </div>       
                </div>
            </div>
            <div className="pro">
                    <a href="#" class="btn bg-dark text-white m-4">View All Products</a>
            </div>
            <div>
                            <div className="textWrapper bg-dark text-white pt-5 mt-2 mb-5">
                                <h2>Shop Local</h2>
                                <p>We know that during COVID-19,
                                     a lot of folks around the city and state are feeling uneasy about the future
                                      - we’re not sure what the future holds either.</p>
                                <p>That said: we know that we love making sure you have the gear you need for your adventures,
                                     and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>
                                <p>But as long as folks like yourself support small businesses around the city, 
                                    then we’ll be here — every day, making sure your orders arrive on time.</p>
                                <p>-------</p>
                                <p>Jane & John Doe</p>
                                <div><strong>Acme Outdoors</strong></div>
                            </div>
                        </div>

            

        </div> );
    }
}
 
export default Third;