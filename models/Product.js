import mongoose from 'mongoose';


const Product = new mongoose.Schema({
    name: {type: String,required: true},
    company: {type: String, required: true},
    price: {type:Number,required: true},
    picture: {type: String},
});

export default mongoose.model("Product",Product);