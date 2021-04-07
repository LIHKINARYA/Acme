import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
        <div className="backgroundimage4">
            <div className="conta">
            <div class="card-group">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Contact Us</h5>
                        <p class="card-text">Just want to say hi? We'd love to hear from you. We love our customers and community!</p>
                        <button type="button" class="btn btn-info">Send us a message</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Get Support</h5>
                        <p class="card-text">Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
                        <button type="button" class="btn btn-info">Contact Support</button>
                        </div>
                    </div>
  
                </div>
                </div>
        </div>
        <div>
            <div>
                <h2>Contact Us</h2>
                <p>Acme Outdoors</p>
                <p>123 Rainy Street</p>
                <p>Oklahama City, OK 73129</p>
                <p><strong>General Inquiries: </strong>  (405) 555-5555</p>
                <p><strong>Customer Support: </strong>  (405) 555-5556</p>
            </div>
    
            
        </div>
        </div>
         );
    }
}
 
export default Contact;