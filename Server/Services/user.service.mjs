// import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { User } from "../Models/user.model.mjs";
import { Kid } from "../Models/kid.model.mjs";
import { getAllKids } from "./kids.service.mjs";
import { HttpError } from "./http-error.mjs";


export const addUser = async (req, res, next) => {
    const { id, name, email, password } = req.body;
    const newUser = new User({
        name: name,
        email: email,
        password: password,
        login: false,
        kids: []
    });
    const result = await newUser.save();
    res.json(result);
};

export const getUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findOne({_id: ObjectId(id)}, "-password")
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

//usersRouter.get('/api/users/kids/:user', getKidByUserId)
export const getKidByUserId = async (req, res, next) => {
    const user = req.params.user
    const kids = await Kid.find({user: ObjectId(user)}, '-password');
    res.json(kids);
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





