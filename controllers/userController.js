import UserModel from '../models/userModel.js';

export const addUser = async (req, res) => {
    const user = new UserModel(req.body);
    await user.save();
    res.send(user);
}

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find({});
    res.send(users);
}

