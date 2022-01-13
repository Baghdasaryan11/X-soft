import React from "react";
import './FollowUs.css';
import InstagramIcon from '../../../assets/icons/InstagramIcon.png';
import Img1 from '../../../assets/Rectangle 119.png';
import Img2 from '../../../assets/Rectangle 120.png';
import Img3 from '../../../assets/Rectangle 121.png';
import Img4 from '../../../assets/Rectangle 122.png';
import Img5 from '../../../assets/Rectangle 123.png';

const FollowUs = () => {

    return(
        <div className="FollowUs">
            <div>
                <h2>We love our community</h2>
                <a href="https://www.instagram.com/pethempcompany/" target="_blank">
                    <img src={InstagramIcon} alt="" />
                    Follow us in Instagram 
                    </a>
            </div>

            <div>
                <img src={Img1} alt="" />
                <div className="FollowUs_images">
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                    <img src={Img5} alt="" />
                </div>
            </div>

        </div>
    )
};

export default FollowUs;