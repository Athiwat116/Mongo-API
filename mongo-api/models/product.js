import mongoose from "mongoose";

const ProuctSchema = new mongoose.Schema({
    productName: { type: String, require: true },
    price: { type: Number, require: true, min: 1 },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, min: 1, max: 5, default: 1 },
    categoryId: { typr: mongoose.type.ObjectId, ref: 'Category'}
},{ timestamps: true });

const Product = mongoose.model('Product', ProuctSchema);

export default Product;