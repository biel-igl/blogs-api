const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { userService } = require('../services');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ data: email }, JWT_SECRET);
    return res.status(200).json({ token });
};