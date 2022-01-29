// import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
import { User } from "../Models/user.model.mjs";
import { HttpError } from "./http-error.mjs";



// const USERS_LIST = [
//     { 
//         id: 'u1',
//         parentName: 'Asaf',
//         email: 'asaf@gmail.com',
//         password: '1234',
//         isLogedin: false,
//         kids: [
//             {name: 'Shaked', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
//             {name: 'Yuval', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
//         ]
//     },
//     { 
//         id: 'u2',
//         parentName: 'Joe',
//         email: 'joe@gmail.com',
//         password: '1234',
//         isLogedin: false,
//         kids: [
//             {name: 'Nick', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
//             {name: 'Jane', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
//         ]
//     },
// ]

export const addUser = async (req, res, next) => {
    const { id, name, email, password } = req.body;
    const newUser = new User({
        id: id,
        name: name,
        email: email,
        password: password,
        login: false
    });
    const result = await newUser.save();
    res.json(result);
};

export const getUser = async (req, res, next) => {
    const userEmail = req.params.email;
    const user = await User.findOne({email: userEmail}, "-password")
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

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({email: email});
    
    if (existingUser && existingUser.password === password){
        const logedInUser = await User.findOneAndUpdate(
            {email: email},
            {login: true},
            { new: true }
        );
        res.json(`${existingUser.name} 'successfully logedin`);
    }
    else{
        const error = new HttpError(
            'Invalid email or password',
            500
        )
        //return next(error);
        res.json({error: error});
    }
    
}



