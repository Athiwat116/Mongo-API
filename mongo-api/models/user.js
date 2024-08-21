import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    active: {type: Boolean, default: true },
    role: { 
        type: String, 
        enum: ['Admin', 'User'], 
        default: 'User' 
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;