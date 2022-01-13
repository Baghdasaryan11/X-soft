import mongoose from 'mongoose';


const Review = new mongoose.Schema({
    videoLink: {type: String, required: true},
    title: {type: String,required: true},
    company: {type: String},
    author: {type: String},
    post: {type: String},
});

export default mongoose.model("Review",Review);