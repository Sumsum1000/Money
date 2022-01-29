import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    kids: {
        type: []
    },
    login: {
        type: Boolean
    }
})

export const User = mongoose.model('User', userSchema);