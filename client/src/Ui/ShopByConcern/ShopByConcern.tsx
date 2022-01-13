import React, { FC } from 'react';
import classes from './ShopByConcern.module.css';
import HeartImg from '../../assets/icons/Heart.png';
import DogImg from '../../assets/icons/Dog.png';
import LevImg from '../../assets/icons/lev.png';
import BubbleImg from '../../assets/icons/Buble.png';

const ShopByConcern: FC = () => {

    return(
        <section className={classes.ShopByConcern}>
            <h2>Shop by Concern</h2>
            <div>
                <div>
                    <img src={BubbleImg} alt="" />
                    <p>Relief</p>
                </div>
                <div>
                    <img src={DogImg} alt="" />
                    <p>Mobility</p>
                </div>
                <div>
                    <img src={LevImg} alt="" />
                    <p>Calm</p>
                </div>
                <div>
                    <img src={HeartImg} alt="" />
                    <p>Wellness</p>
                </div>
            </div>

            
        </section>
    )
};

export default ShopByConcern;