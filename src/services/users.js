const { User } = require('../models');

const findUserByEmail = async (email) => User.findOne(
    { where: { email } },
);

const findUserById = async (id) => User.findOne(
    { where: { id }, attributes: { exclude: ['password'] } },
);

const findAll = async () => User.findAll(
    { attributes: { exclude: ['password'] } },
);

const createUser = async ({ displayName, email, password, image }) => {
    const emailFind = await User.findOne(
        { where: { email } },
    );
    if (emailFind !== null) return { type: 409, message: { message: 'User already registered' } };
    const create = await User.create({ displayName, email, password, image });
    return create;
};

module.exports = {
    findUserByEmail,
    findUserById,
    findAll,
    createUser,
};