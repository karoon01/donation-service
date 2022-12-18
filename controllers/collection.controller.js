const Collection = require('../models/Collection');
const Donation = require('../models/Donation');
const {check, validationResult} = require('express-validator');

const showAllCollections = async (req, res) => {
    try {
        const collections = await Collection.find();
        if (collections.length === 0) {
            return res.send('Currently here is no one assemblage!');
        }
        res.send(collections);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const showAllCollectionDonations = async (req, res) => {
    try {
        const {collectionId} = req.params;

        const collection = await Collection.findById(collectionId);
        if (!collection) {
            return res.status(404).json({
                error: {
                    message: 'Assemblage doesn\'t exist',
                    code: 404,
                },
            });
        }

        const donations = await Donation.find({collection: collectionId});
        if (donations.length === 0) {
            return res.send('Currently here is no one donation, but you could change it!');
        }
        res.send(donations);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const createCollection = [
    check('name', 'Fill collection name below').exists(),
    check('description', 'Fill collection description below').exists(),
    check('timeEnd', 'Fill collection end time').exists(),
    check('goalSum', 'Fill collection goal sum').exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: 'Incorrect data',
                        code: 400,
                    },
                });
            }

            const {name, description, timeEnd, goalSum} = req.body;
            const {userId} = req.params;

            const candidate = await Collection.findOne({name});
            if (candidate) {
                return res.status(400).json({
                    message: 'Assemblage with this name is already exist',
                    code: 400,
                });
            }

            const newCollection = await Collection.create({
                name: name,
                description: description,
                timeEnd: timeEnd,
                goalSum: goalSum,
                owner: userId,
            });

            res.send(newCollection);
        } catch (error) {
            res.status(500).json({
                error: {
                    message: error.message,
                    code: 500,
                },
            });
        }
    },
];

const updateCollection = async (req, res) => {
    try {
        const {collectionId} = req.params;

        const candidate = await Collection.findById(collectionId);
        if (!candidate) {
            return res.status(404).json({
                error: {
                    message: 'Collection doesn\'t exist',
                    code: 404,
                },
            })
        }

        const updatedCollection = await Collection.findByIdAndUpdate(collectionId, req.body, {new: true});
        res.send(updatedCollection);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const endCollection = async (req, res) => {
    try {
        const {collectionId} = req.params;

        const candidate = await Collection.findById(collectionId);
        if (!candidate) {
            return res.status(404).json({
                error: {
                    message: 'Collection doesn\'t exist',
                    code: 404,
                },
            })
        }

        if (candidate.status === 'Done') {
            return res.status(400).json({
                error: {
                    message: 'Collection is already ended!',
                    code: 400,
                }
            });
        }
        const endedCollection = await Collection.findByIdAndUpdate(collectionId, {collectionStatus: 'Done'});
        res.send(endedCollection);
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
    showAllCollectionDonations,
    showAllCollections,
    createCollection,
    updateCollection,
    endCollection
};