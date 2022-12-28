const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const config = require('config');

const generateTokens = async (userId, role) => {
    const accessToken = jwt.sign(
        { userId: userId, role: role },
        config.get('jwtAccessSecret'),
        { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
        { userId: userId, role: role },
        config.get('jwtRefreshSecret')
    );

    await Token.create({ userId: userId, refreshToken: refreshToken });

    return {
        accessToken,
        refreshToken,
    };
};

const regenerateAccessToken = (refreshToken) => {
    try {
        const decoded = jwt.verify(refreshToken, config.get('jwtRefreshToken'));
        const newAccessToken = jwt.sign(
            {
                userId: decoded.userId,
                role: decoded.role,
            },
            config.get('jwtAccessSecret'),
            { expiresIn: '1h' }
        );

        return newAccessToken;
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
};

const verifyAccessToken = (accessToken) => {
    try {
        const data = jwt.verify(accessToken, config.get('jwtAccessToken'));
        return data;
    } catch (error) {
        return null;
    }
};

module.exports = { generateTokens, regenerateAccessToken, verifyAccessToken };
