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


export const getKids = (req, res, next) => {
    let result = null;
    const userid = req.params.userid;
    const users = USERS_LIST.find(user => {
        return user.id === userid;
    })

    if (!users) {
        throw new HttpError('Couldnt find user id.', 404);
    }
    res.json(users.kids);
}