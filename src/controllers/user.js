const { userService } = require('../services');
const { newToken } = require('../auth/authFunction');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    if (newUser.type) return res.status(newUser.type).json(newUser.message);

    const token = newToken(newUser);
    return res.status(201).json({ token });
};

const getAll = async (__req, res) => {
    const users = await userService.findAll();
    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.findUserById(id);
    console.log('user', user);
    if (user === null) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAll,
    getById,
};