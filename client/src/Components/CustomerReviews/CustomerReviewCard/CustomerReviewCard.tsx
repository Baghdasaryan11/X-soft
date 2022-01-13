import React from "react";
import classes from './CustomerReviewCard.module.css';
export interface ICustomerReviewCardProps{
    videoLink: String;
    title: String;
    post: String;
    author: String;
    company: String;

}

const CustomerReviewCard = ({videoLink,title, post,author,company}: ICustomerReviewCardProps) => {


    return(
        <div className={classes.CustomerReviewCard}>
            
            <iframe width="1280" height="720" src={videoLink as string} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className={classes.Video}></iframe>
            <div className={classes.Stars}>
            <i className="fas fa-star"></i>&nbsp;
            <i className="fas fa-star"></i>&nbsp;
            <i className="fas fa-star"></i>&nbsp;
            <i className="fas fa-star"></i>&nbsp;
            <i className="fas fa-star"></i>
            </div>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Post}>{post}</p>
            <p className={classes.Author}>{author}</p>
            <p className={classes.Company}>{company}</p>
        </div>
    )
};

export default CustomerReviewCard;