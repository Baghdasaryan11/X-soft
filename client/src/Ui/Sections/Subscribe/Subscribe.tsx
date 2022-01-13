import React from "react";
import './Subscribe.css';
import SubscribeImage from '../../../assets/SubscribeImage.png';


const Subscribe = () => {


    return(
    
        <div className="Subscribe">


                <img src={SubscribeImage} alt="" />
            <div>
                <div className="Subscribe_form">
                    <h2>Subscribe to Newsletter</h2>
                    <p>Subscribe to our newsletter & stay updated</p>
                    <label>
                        <input type="text" placeholder="Email"/>
                        <button>Subscribe now</button>
                    </label>
                </div>
            </div>
        </div>
    )
};
    
export default Subscribe;