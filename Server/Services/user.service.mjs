// import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
import { User } from "../Models/user.model.mjs";



const USERS_LIST = [
    { 
        id: 'u1',
        parentName: 'Asaf',
        email: 'asaf@gmail.com',
        password: '1234',
        isLogedin: false,
        kids: [
            {name: 'Shaked', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
            {name: 'Yuval', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
        ]
    },
    { 
        id: 'u2',
        parentName: 'Joe',
        email: 'joe@gmail.com',
        password: '1234',
        isLogedin: false,
        kids: [
            {name: 'Nick', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
            {name: 'Jane', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
        ]
    },
]

export const addUser = async (req, res, next) => {
    const { id, name, email, password } = req.body;
    const newUser = new User({
        id: id,
        name: name,
        email: email,
        password: password
    });
    const result = await newUser.save();
    res.json(result);
};

export const getUser = async (req, res, next) => {
    const userEmail = req.params.email;
    const user = await User.findOne({email: userEmail})
    res.json(user);
};

export const getAllUsers = async (req, res, next) => {
    const user = await User.find();
    res.json(user);
};



export const updateUser = async (req, res, next) => {
    const result = await User.findOneAndUpdate(
        {email: req.body.email}, 
        req.body,
        { new: true }
    );
    res.json(result);
}



