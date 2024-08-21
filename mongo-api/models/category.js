// Create Schema
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, require: true, minLength: 3, maxLength: 50},
    description: { type: String }
},{timestamps: true});

// Create model from Schema(0)
const Category = mongoose.model('Category', CategorySchema);

// export model
export default Category;