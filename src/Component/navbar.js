import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './navbar.css';
import { AiOutlineDingding } from "react-icons/ai";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="fixed-top">
                <div className=" bg-dark p-1" href="./pages/covid">
                    <a href="./covid" className = "covid">
                        <button className="m-2" type="button" class="btn btn-danger">Announcement!</button>
                        <p className="m-2 text-white">How we're responding to COVID-19!</p>
                    </a>
                </div>
                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light text-white">
                    <div class="container-fluid">
                        <a id="black"><AiOutlineDingding size={50}/> </a>
                        <a class="navbar-brand p-1" href="/">A C M E</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/donate">Donate</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"  aria-disabled="true">Cart</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
         );
    }
}
 
export default Navbar;