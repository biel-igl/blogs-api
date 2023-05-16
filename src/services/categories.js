const { Category } = require('../models');

const createCategorie = async ({ name }) => Category.create({ name });

const findAll = async () => Category.findAll();

module.exports = {
    createCategorie,
    findAll,
};