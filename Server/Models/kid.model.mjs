import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';
import { User } from "./user.model.mjs";
//import { getUser } from "../Services/user.service.mjs";


// const idCheck = () => {
//     return { id } = getUser();
// }

const kidSchema = new mongoose.Schema({
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
    tasks:[],
    totalMoney: {
        type: Number
    },
    login:{
        type: Boolean
    },
    user: {
        type: ObjectId,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // autopopulate: true,
        // required: true
    }
})

kidSchema.plugin(autopopulate);

export const Kid = mongoose.model('Kid', kidSchema);