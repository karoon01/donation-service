const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const config = require('config');

const generate = (userId) => {
    const accessToken = jwt.sign(
        {userId: userId},
        config.get('jwtAccessSecret'),
        {expiresIn: '1h'});

    const refreshToken = jwt.sign(
        {userId: userId},
        config.get('jwtRefreshSecret'));

    return {
        accessToken,
        refreshToken,
    };
};

const save = async (userId, refreshToken) => {
    const existingToken = await Token.findOne({refreshToken});

    if (existingToken) {
        existingToken.refreshToken = refreshToken;
        return existingToken.save();
    }
    return await Token.create({userId, refreshToken});
};

const verifyAccessToken = (accessToken) => {
    try {
        jwt.verify(accessToken, config.get('jwtSecret'));
    } catch (error) {
        return null;
    }
};

const verifyRefreshToken = (refreshToken) => {
    try {
        jwt.verify(refreshToken, config.get('jwtSecret'));
    } catch (error) {
        return null;
    }
};

module.exports = {generate, save, verifyAccessToken, verifyRefreshToken};