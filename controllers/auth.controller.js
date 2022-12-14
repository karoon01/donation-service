const User = require('../models/User');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const tokenService = require('../services/tokenService');
const {generate} = require("../services/tokenService");

const SALT_ROUNDS = 10;

const signUp = [
    check('firstName', 'Fill first name below').exists(),
    check('lastName', 'Fill last name below').exists(),
    check('email', 'Fill correct email below').normalizeEmail().isEmail(),
    check('password', 'Fill correct password below').exists().isLength({min: 8, max: 32}),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: 'Incorrect registration data',
                        code: 400,
                    },
                });
            }

            const {firstName, lastName, email, password} = req.body;

            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({
                    error: {
                        message: 'User with email is already exist',
                        code: 400,
                    },
                });
            }
            const genSalt = await bcrypt.genSalt(SALT_ROUNDS);
            const hashedPassword = await bcrypt.hash(password, genSalt);
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
            });

            const tokens = tokenService.generate(user._id);
            await tokenService.save(user._id, tokens.refreshToken);

            res.status(201).json({
               ...tokens,
                userId: user._id,
            });
        } catch (error) {
            res.status(500).json({
                error: {
                    message: error.stack,
                    code: 500,
                },
            });
        }
    }
];

const signIn = [
    check('email').normalizeEmail().isEmail(),
    check('password').exists().isLength({min: 8, max: 32}),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: 'Incorrect authorization data',
                        code: 400,
                    },
                });
            }

            const {email, password} = req.body;

            const user = await User.findOne({email});
            if(!user) {
                return res.status(400).json({
                    error: {
                        message: 'User with this email doesn\'t exist',
                        code: 400,
                    },
                });
            }

            const isPasswordEqual = bcrypt.compare(password, user.password);
            if(isPasswordEqual) {
                return res.status(400).json({
                    error: {
                        message: 'Incorrect password',
                        code: 400,
                    },
                });
            }

            const tokens = tokenService.generate(user._id);
            await tokenService.save(user._id, tokens.refreshToken);

            res.status(200).json({
                ...tokens,
                userId: user._id,
            });
        } catch (error) {
            res.status(500).json({
                error: {
                    message: error.message,
                    code: 500,
                },
            });
        }
    }
];

module.exports = {signUp, signIn};