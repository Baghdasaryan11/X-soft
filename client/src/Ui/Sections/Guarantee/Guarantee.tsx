import React from 'react';
import './Guarantee.css';
import Label from './label.png';
import Leaf from './leaf.png';

const Guarantee = () => {
    

    return(
        <section className="Guarantee">
            <div className="Left">
                <img src={Label} alt="Label" />
                <h2>Our Trusted Guarantee</h2>
                <p>We stand behind our product and offer a 30-day, no questions asked, money back guarantee</p>
                <button>Shop Now</button>
            </div>
            <div className="Right">
                <img src={Leaf} alt="" />
                <h2>All Natural</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div>
                    <div></div>
                    <div className="Active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
};

export default Guarantee;