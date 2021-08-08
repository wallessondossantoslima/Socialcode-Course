const jwt = require("jsonwebtoken");

const public = ("/", "/api/auth");

const AuthMiddwares = (req, res, next) => {
    const {authorization} = req.headers;

    if(public.includes(req.url)) {
        return next();
    }

    if (!authorization) {
        res.status.send({message: "not found"});
    }
    const [, token] = authorization.split(" ");

    try {
        jwt.verify(token, proncess.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(404).send({message: "error"});
    }
};

module.exports = AuthMiddwares;
