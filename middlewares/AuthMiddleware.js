const tokenService = require('../services/tokenService');

const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];
        if (!accessToken) {
            return res.status(401).json({
                error: {
                    message: 'Unauthorized',
                    code: 401,
                },
            });
        }

        const data = tokenService.verifyAccessToken(accessToken);
        if (!data) {
            return res.status(401).json({
                error: {
                    message: 'Unauthorized',
                    code: 401,
                },
            });
        }
        req.userId = data.userId;

        next();
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    error: {
                        message: 'Forbidden',
                        status: 403,
                    },
                });
            }
            next();
        },
    ];
}

module.exports = {authMiddleware, authorize};