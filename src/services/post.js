const { BlogPost, User, Category } = require('../models');

const findAll = async () => BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' },
    ],
});

module.exports = {
    findAll,
};