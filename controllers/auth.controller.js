const User = require("../models/User");
const {check, validationResult} = require('express-validator');
const bcrypt = require("bcryptjs");


const signUp = [
    check("firstName").exists(),
    check("lastName").exists(),
    check("email").normalizeEmail().isEmail(),
    check("password").exists().isLength({min: 8, max: 32}),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({
                    error: {
                        message: 'Incorrect registration data',
                        code: 400,
                    },
                });
            }

            const {email, password} = req.body;

            const possibleUser = await User.findOne({email});
            if (possibleUser) {
                return res.status(400).send({
                    error: {
                        message: 'User with email is already exist',
                        code: 400,
                    },
                });
            }

            const hashedPassword = await bcrypt.hash(password);
            const user = await User.create({
                email: email,
                password: hashedPassword,
            });

            res.status(201).send({
                message: 'User created',
                code: 201,
            });
        } catch (error) {
            res.status(500).send({
                error: {
                    message: error.message,
                    code: 500,
                },
            });
        }
    }
];

const signIn = [
    check("email").normalizeEmail().isEmail(),
    check("password").exists().isLength({min: 8, max: 32}),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({
                    error: {
                        message: 'Incorrect authorization data',
                        code: 400,
                    },
                });
            }

            const {email, password} = req.body;

            const user = await User.findOne({email});
            if(!user) {
                return res.status(400).send({
                    error: {
                        message: 'User with this email doesn\'t exist',
                        code: 400,
                    },
                });
            }

            const isPasswordEqual = bcrypt.compare(password, user.password);
            if(!isPasswordEqual) {
                return res.status(400).send({
                    error: {
                        message: 'Incorrect password',
                        code: 400,
                    },
                });
            }

            //TODO: jwt send
            res.status(200).send({

            });
        } catch (error) {
            res.status(500).send({
                error: {
                    message: error.message,
                    code: 500,
                },
            });
        }
    }
];

module.exports = {signUp, signIn};