const { postService } = require('../services');

const getAll = async (__req, res) => {
    const posts = await postService.findAll();
    return res.status(200).json(posts);
};

module.exports = { 
    getAll,
};