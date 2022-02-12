import { Kid } from "../Models/kid.model.mjs";
import { HttpError } from "./http-error.mjs";
import { User } from "../Models/user.model.mjs";
import { ObjectId } from "mongodb";


export const addKid = async (req, res, next) => {
    const { id, name, email, password, tasks } = req.body;
    //const user = 
    const newKid = new Kid({
        id: id,
        name: name,
        email: email,
        password: password,
        tasks: [],
        totalMoney: 0,
        login: false,
        user: null
    });
    const result = await newKid.save();
    res.json(result);
};

export const getKid = async (req, res, next) => {
    const kidEmail = req.params.email;
    const kid = await Kid.findOne({email: kidEmail}, "-password")
    res.json(kid);
};


export const getAllKids = async (req, res, next) => {
    const kids = await Kid.find({}, '-password');
    res.json(kids); //kids array - 134 5:37
};

// export const getKidByUserId = async (req, res, next) => {
//     const user = req.params.user
//     const kids = await kid.find({userid: ObjectId(user)});
//     res.json(kids);
// }

export const updateKid = async (req, res, next) => {
    const kidUpdate = await Kid.findOneAndUpdate(
        {email: req.params.email}, 
        req.body,
        { new: true }
    );
    res.json(kidUpdate);
}