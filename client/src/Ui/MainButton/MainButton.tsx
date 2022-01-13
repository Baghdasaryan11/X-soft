import React from 'react';
import  './MainButton.css';


interface IMainButton{
    name: String;
    margin?: String | Number
}

const MainButton = ({name,margin}: IMainButton) => {


    return(
        <button 
            className="MainButton"
            style={{margin: Number(margin)}}>
            {name}
        </button>
    )
};
export default MainButton;