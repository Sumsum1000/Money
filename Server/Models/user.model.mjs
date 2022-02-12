import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';
import { getKid } from "../Services/kids.service.mjs";
import { ObjectId } from "mongodb";


const userSchema = new mongoose.Schema({

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
    kids: [{
        type: ObjectId
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // autopopulate: true
    }],
    login: {
        type: Boolean
    }
})


export const User = mongoose.model('User', userSchema);