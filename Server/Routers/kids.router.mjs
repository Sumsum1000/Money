import express from "express";
import { HttpError } from "../Services/http-error.mjs";
import { getKids } from "../Services/kids-service.mjs";

export const kidsRouter = express.Router();

const USERS_LIST = [
    { 
        id: 'u1',
        parentName: 'Asaf',
        email: 'asaf@gmail.com',
        password: '1234',
        isLogedin: false,
        kids: [
            {id: 'u1k1', parentid: 'u1', name: 'Shaked', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
            {id: 'u1k2', parentid: 'u1', name: 'Yuval', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
        ]
    },
    { 
        id: 'u2',
        parentName: 'Joe',
        email: 'joe@gmail.com',
        password: '1234',
        isLogedin: false,
        kids: [
            {id: 'u2k1', parentid: 'u2', name: 'Nick', totalMoney: 0, email: 'shed@gmail.com', password: 1234},
            {id: 'u2k2', parentid: 'u2', name: 'Jane', totalMoney: 0, email: 'yuv@gmail.com', password: 5678}
        ]
    },
]


// kidsRouter.get('/api/users/:userid/kids', (req, res, next) => {
//     let result = null;
//     const userid = req.params.userid;
//     const users = USERS_LIST.find(user => {
//         return user.id === userid;
//     })

//     if (!users) {
//         throw new HttpError('Couldnt find user id.', 404);
//     }
//     res.json(users.kids);
// })

kidsRouter.get('/api/users/:userid/kids', getKids);


