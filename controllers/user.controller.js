const User = require('../models/User');
const bcrypt = require('bcrypt');
const sendEmail = require('../services/mailService');

const SALT_ROUNDS = 10;
const EMAIL_PASSWORD_SUBJECT = 'Password change';
const EMAIL_PASSWORD_TEXT = 'Hello, your password has been changed!';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;

        if (userId !== req.userId) {
            return res.status(403).json({
                error: {
                    message: 'Forbidden',
                    code: 403,
                },
            });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                error: {
                    message: "User doesn't exist",
                    code: 404,
                },
            });
        }
        res.send(user);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const updateUserData = async (req, res) => {
    try {
        const userId = req.userId;

        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });

        res.send(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const changeUserStatus = async (req, res) => {
    try {
        const { userId } = req.body;

        const candidate = await User.findById(userId);
        if (!candidate) {
            return res.status(404).json({
                error: {
                    message: "User doesn't exist",
                    code: 404,
                },
            });
        }

        if (candidate.userStatus === 'Disabled') {
            const updatedUser = await User.findByIdAndUpdate(userId, {
                userStatus: 'Active',
            });
            return res.send(updatedUser);
        }
        const updatedUser = await User.findByIdAndUpdate(userId, {
            userStatus: 'Disabled',
        });
        res.send(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const updatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.userId;
        console.log(userId);

        const candidate = await User.findById(userId);

        const isPasswordEqual = await bcrypt.compare(
            oldPassword,
            candidate.password
        );
        if (!isPasswordEqual) {
            return res.status(400).json({
                error: {
                    message:
                        "Entered old password and actual password doesn't match",
                    code: 400,
                },
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { password: hashedPassword },
            { new: true }
        );

        // await sendEmail(candidate.email, EMAIL_PASSWORD_SUBJECT, EMAIL_PASSWORD_TEXT);

        res.send(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

module.exports = {
    getUserById,
    getAllUsers,
    updateUserData,
    changeUserStatus,
    updatePassword,
};
