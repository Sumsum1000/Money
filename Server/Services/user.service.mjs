import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { user } from "../Models/user.model.mjs";

const url = 'mongodb+srv://Niko_4001:eQqDLVwHthqTTgYL@cluster0.oqvv4.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(url)
.then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
});

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



export const getUser = (req, res, next) => {
    const userid = req.params.userid;
    const user = USERS_LIST.find(user => {
       return user.id === userid;  
    })

    if (!user) {
        return next(
            new HttpError('Couldnt find user id.', 404)
        )
    }
    res.json(user)
}

export const x = (req, res, next) => {
    const name = req.body.parentName;
    const email = req.body.email;
    const newUser = { parentName: name,  email: email };
    USERS_LIST.push({newUser});

    res.status(201).json({newUser: newUser});
}

export const addUser = async (req, res, next) => {
    const newUser = new user({
        name: req.body.name,
        email: req.body.email
    });
    const result = await newUser.save();
    res.json(result);
};
    


// Mongo
// export const x = async (req, res, next) => {
//     const newUser = {
//         name: req.body.name,
//         email: req.body.email
//     };
//     const client = new MongoClient(url);

//     try{
//         await client.connect();
//         const db = client.db();
//         const result = await db.collection('users').insertOne(newUser);
//     }catch(error){
//         return res.json({message: 'couldnt store data'});
//     };
//     client.close();
//     return res.json(newUser);
// };