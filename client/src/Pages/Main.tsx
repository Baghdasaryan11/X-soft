import React, { FC } from "react";
import './Main.css';
import Header from "../Components/Header/Header";
import Banner1 from "../Ui/Banners/Banner1/Banner1";
import {CarouselItem} from '../Ui/Banners/Banner1/Banner1';
import TreesIcon from '../assets/icons/trees.png';
import ColorPicerIcon from '../assets/icons/color-picker.png';
import ColectionIcon from '../assets/icons/open-collective.png';
import MenDog from '../assets/Banner_images/image.png';
import MainButton from "../Ui/MainButton/MainButton";
import MostPopularProducts from "../Components/MostPopularProducts/MostPopularProducts";
import ShopByConcern from "../Ui/ShopByConcern/ShopByConcern";
import SectionDog from "../Ui/Sections/SectionDog/SectionDog";
import Guarantee from "../Ui/Sections/Guarantee/Guarantee";
import KeyWeys from "../Ui/Sections/KeyWeys/KeyWeys";
import CatDog from "../Ui/Sections/CatDog/CatDog";
import CustomerReviews from "../Components/CustomerReviews/CustomerReviews";
import BundleSave from "../Components/BundleSave/BundleSave";
import FollowUs from "../Ui/Sections/FollowUs/FollowUs";
import Subscribe from "../Ui/Sections/Subscribe/Subscribe";
import Footer from "../Ui/Footer/Footer";

export type ImageType = { id: number; url: string };

const Main: FC = () => {
    return(
        <main>
        <Header/>
        <Banner1>
          <CarouselItem>
            <div>
              <p>Set your pet at ease!</p>
              <div>
                <img src={TreesIcon} alt="" />
                &nbsp;&nbsp;
                <span>Organic & Natural Ingradients</span>
              </div>
              <div>
                <img src={ColorPicerIcon} alt="" />
                &nbsp;&nbsp;
                <span>Lab-Tested</span>
              </div>
              <div>
                <img src={ColectionIcon} alt="" />
                &nbsp;&nbsp;
                <span>Organic & Natural Ingradients</span>
              </div>
              <MainButton
                name="Buy now"
                margin="250 0"/>
            </div>
            <div>
              <img src={MenDog} alt="" className="MenDog"/>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <p>Set your pet at ease!</p>
              <div>
                <img src={TreesIcon} alt="" />
                &nbsp;&nbsp;
                <span>Organic & Natural Ingradients</span>
              </div>
              <div>
                <img src={ColorPicerIcon} alt="" />
                &nbsp;&nbsp;
                <span>Lab-Tested</span>
              </div>
              <div>
                <img src={ColectionIcon} alt="" />
                &nbsp;&nbsp;
                <span>Organic & Natural Ingradients</span>
              </div>
            </div>
            <div>
              <img src={MenDog} alt="" className="MenDog"/>
            </div>
          </CarouselItem>
        </Banner1>
        
        <MostPopularProducts/>
        <ShopByConcern/>
        <SectionDog/>
        <Guarantee/>
        <KeyWeys/>
        <CatDog/>
        <CustomerReviews/>

        <BundleSave/>

        <FollowUs/>
        <Subscribe/>

        <Footer/>
        </main>
    )
};

export default Main;