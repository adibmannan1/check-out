import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// description: Auth user and get token
//route: POST api/users/login
//access: Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '60d'})

        res.cookie('jwt', token, 
        {   httpOnly: true, 
            secure: process.env.NODE_ENV !== 'development', 
            sameSite: 'strict',
            maxAge: 60*24*60*60*1000 //60days
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password')
    }
});
// description: Register user
//route: POST api/users
//access: Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});
// description: logout user and clear cookie
//route: POST api/users/logout
//access: Private
const logOutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});
// description: get user profile
//route: POST api/users/profile
//access: Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});
// description: update profile
//route: PUT api/users/profile
//access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update profile');
});
// description: get users
//route: GET api/users
//access: Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});
// description: get user by ID
//route: GET api/users/:id
//access: Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
});
// description: delete user
//route: DELETE api/users/:id
//access: Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send( 'delete user');
});
// description: update user
//route: PUT api/users/:id
//access: Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send( 'update user');
});

export {
    authUser,
    registerUser,
    logOutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
};
  