const tokenService = require('../services/tokenService');

const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];
        if(!accessToken) {
            return res.code(401).send({
                error: {
                    message: 'Unauthorized',
                    code: 401,
                },
            });
        }

        const data = tokenService.verifyAccessToken(accessToken);
        if(!data) {
            return res.code(401).send({
                error: {
                    message: 'Unauthorized',
                    code: 401,
                },
            });
        }

        req.userId = data.userId;
        next();
    } catch (error) {
        res.status(500).send({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

module.exports = authMiddleware;