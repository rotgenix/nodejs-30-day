const JWT = require('jsonwebtoken');

const generateToken = (email) => {
    const token = JWT.sign({ email: email }, "adsfsd");
    return token;
}

const authenticationMiddleware = (req, res, next) => {
    try {
        const decodedToken = JWT.verify(req.body.token, "adsfsd");
        next();
    } catch (error) {
        return res.status(400).json({
            message: "Unauthorized Access"
        })
    }
}

module.exports = { authenticationMiddleware, generateToken };