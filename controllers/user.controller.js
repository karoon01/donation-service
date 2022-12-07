const User = require("../models/User");
const e = require("express");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const {userId} = req.params;

        const user = await User.findById({userId});
        if (!user) {
            return res.status(404).send({
                error: {
                    message: 'User doesn\'t exist',
                    code: 404,
                },
            });
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

module.exports = {getUserById, getAllUsers};