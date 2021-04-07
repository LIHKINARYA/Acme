import React, { Component } from 'react';
import './pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <div className="mt-5 plt">
                <div className="d-flex flex-row justify-content-between">
                    <div  className="">
                        <p>WAYS TO SUPPORT</p>
                        <h1>Support Acme Outdoors.</h1>
                    </div>
                    <div className="w45">
                        <p>COVID-19 has forced us to close our retail space,
                            but we need support from patrons like yourself now more than ever.
                            Below, we’ve listed the best ways to help us through this season.
                        </p>
                    </div>
                </div>
                <div>  
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="..."/>
                                <div class="card-body text-white bg-dark">
                                    <h5 class="card-title">SHOP PRODUCTS</h5>
                                    <p class="card-text">TOur full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260" class="card-img-top" alt="..."/>
                                <div class="card-body text-white bg-dark">
                                    <h5 class="card-title">DONATE</h5>
                                    <p class="card-text">Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src="https://images.unsplash.com/photo-1575571342665-295c9cb8c016?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" class="card-img-top" alt="..."/>
                                <div class="card-body text-white bg-dark">
                                    <h5 class="card-title">BUY GIFT CARDS </h5>
                                    <p class="card-text">Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                        
                        <div>
                        <div className="backgroundImg1">
                                <div className="text p-4 mt-5 w35 text-white">
                                    <h1>How we're keeping you safe during COVID-19</h1>
                                </div>
                                <div className="text mt-5 p-4 w35 text-white">
                                    <h2>As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</h2>
                                </div>
                                <div className="text mb-5 p-4 text-white">
                                    <button type="button" class="btn bg- text-white border border-white">Read Our Statement</button>
                                </div>
                            </div>
                        </div>
                


            



        
            </div>
          );
    }
}
 
export default Support;

