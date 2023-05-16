const { newToken } = require('../auth/authFunction');
const { userService } = require('../services');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = newToken(email);
    return res.status(200).json({ token });
};