import React, { FC } from "react";
import './CatDog.css';
import DogImg from "../../../assets/Dog.png";
import CatImg from "../../../assets/Cat.png";
import ColorPicrIcon from '../../../assets/icons/ColorPickerBig.png';
import WaterIcon from '../../../assets/icons/Water.png';


const CatDog: FC = () => {

    return(
        <div className="CatDog">
            <div>
                <img src={CatImg} alt="" />
                <div className="DETAILS">
                    <img src={WaterIcon} alt="" />
                    <h2>Dosage Chart</h2>
                    <p>Are you looking for the correct dosage size of CBD oil for pet? </p>
                    <button>learn more</button>
                </div>
            </div>
            <div>
                <div className="DETAILS">
                    <img src={ColorPicrIcon} alt="" />
                    <h2>Dosage Chart</h2>
                    <p>Are you looking for the correct dosage size of CBD oil for pet? </p>
                    <button>learn more</button>
                </div>
                <img src={DogImg} alt="" />
            </div>
        </div>
    )
};
export default CatDog;