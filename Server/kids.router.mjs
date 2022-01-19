import express from "express";

export const kidsRouter = express.Router();

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


kidsRouter.get('/api/users/:userid/kids', (req, res, next) => {
    let result = null;
    const userid = req.params.userid;
    const users = USERS_LIST.find(user => {
        if (user.id === userid) {
            result = user.kids
        }
    })
    res.json(result);
})