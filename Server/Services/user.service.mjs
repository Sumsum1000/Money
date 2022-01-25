import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { User } from "../Models/user.model.mjs";
import { ObjectId } from "mongodb";


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
    const newUser = new User({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    });
    const result = await newUser.save();
    res.json(result);
};

export const getUser = async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId)
    res.json(user);
};

export const getAllUsers = async (req, res, next) => {
    const user = await User.find();
    res.json(user);
};



