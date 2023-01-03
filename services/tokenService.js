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

    const existingToken = await Token.findOne({ userId });

    if (existingToken) {
        existingToken.refreshToken = refreshToken;
        existingToken.save();
    } else {
        await Token.create({ userId, refreshToken });
    }

    return {
        accessToken,
        refreshToken,
    };
};

const regenerateAccessToken = (refreshToken) => {
    try {
        const decoded = jwt.verify(
            refreshToken,
            config.get('jwtRefreshSecret')
        );
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
        const data = jwt.verify(accessToken, config.get('jwtAccessSecret'));
        return data;
    } catch (error) {
        return null;
    }
};

module.exports = { generateTokens, regenerateAccessToken, verifyAccessToken };
