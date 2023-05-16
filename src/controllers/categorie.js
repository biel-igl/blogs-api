const { categorieService } = require('../services');

const createCategorie = async (req, res) => {
    const newCategorie = await categorieService.createCategorie(req.body);
    const { dataValues } = newCategorie;

    return res.status(201).json(dataValues);
};

module.exports = {
    createCategorie,
};