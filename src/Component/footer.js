import React, { Component } from 'react';
import { AiOutlineDingding } from "react-icons/ai";
import './pages.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="bg-dark text-white footer">
                <div className="pt-2 pb-2 ">
                    <a id="black"><AiOutlineDingding size={50}/> </a>
                    <p class="navbar-brand p-1" ><strong>A C M E</strong></p>
                </div>
                
            </div>
         );
    }
}
 
export default Footer;