import mongoose from "mongoose";

const kidSchema = new mongoose.Schema({
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
    tasks:{
        type: [{
            task: {type: String},
            payment: {type: Number}
        }]
    }
})

export const Kid = mongoose.model('Kid', kidSchema);