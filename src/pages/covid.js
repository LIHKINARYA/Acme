import React, { Component } from 'react';

import './pages2.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div className="head bg-dark text-white  p-4 ">
                <h1>How we're responding to COVID-19</h1>
            </div>
            <div className="cont p-5">
                    <h2>What’s a Rich Text element?</h2>
                    <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. </p>
                    <h3>Static and dynamic content editing</h3>
                    <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                    <h3>How to customize formatting for each rich text</h3>
                    <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>

                </div>
        </div> );
    }
}
 
export default Covid;