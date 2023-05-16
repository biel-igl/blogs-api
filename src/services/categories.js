const { Category } = require('../models');

const createCategorie = async ({ name }) => Category.create({ name });

module.exports = {
    createCategorie,
};