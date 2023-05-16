const { verifyToken } = require('../auth/authFunction');

const validateToken = async (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) {
            return res.status(401).json({
            message: 'Token not found' });
        }
        const payload = await verifyToken(token);
        req.email = payload;
        return next();        
    } catch (error) {
       return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = validateToken;