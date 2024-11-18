import mongoose, { trusted } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, // if a customer wants to create a product, he/she must enter the name of the product. Otherwise it will be not be possible to create the product.
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },

},{
    timestamps: true // createdAt, updatedAt so that we can see when a user creates or update a product in the database
});

const Product = mongoose.model('Product', productSchema); // this tells that you should create a Product using the productSchema

export default Product;
