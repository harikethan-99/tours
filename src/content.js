import React from 'react'
import {filler} from './filler';
import img from './images/1.jpg';
import img1 from './images/2.jpg';
import img2 from './images/3.jpg';
import img3 from './images/4.jpg';
function Content(){
    return(
        <div>
            <div class="grid-container">
            <img src={img} alt="image" width="600px" height="600px"></img>
            <p><b><blockquote>An ocean breeze puts a mind at ease.</blockquote></b><br></br>
            {filler}
            </p>
            </div>
            <div class="grid-container grid-container1">
            <p className="two"><b><blockquote>An ocean breeze puts a mind at ease.</blockquote></b><br></br>
            {filler}
            </p>
            <img src={img1} alt="image" width="600px" height="600px"></img>
            </div>
            <div class="grid-container grid-container1">
            <img src={img3} alt="image" width="600px" height="600px"></img>
            <p className=""><b><blockquote>An ocean breeze puts a mind at ease.</blockquote></b><br></br>
            {filler}
            </p>
            </div>
            <div class="grid-container grid-container1">
            <p className="two"><b><blockquote>An ocean breeze puts a mind at ease.</blockquote></b><br></br>
            {filler}
            </p>
            <img src={img2} alt="image" width="600px" height="600px"></img>
            </div>
        </div>
    );
}
export default Content;