const { categorieService } = require('../services');

const createCategorie = async (req, res) => {
    const newCategorie = await categorieService.createCategorie(req.body);
    const { dataValues } = newCategorie;

    return res.status(201).json(dataValues);
};

const getAll = async (__req, res) => {
    const categories = await categorieService.findAll();
    return res.status(200).json(categories);
};

module.exports = {
    createCategorie,
    getAll,
};