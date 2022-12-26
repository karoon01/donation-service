const Donation = require('../models/Donation');
const Collection = require('../models/Collection');
const User = require('../models/User');

const makeDonation = async (req, res) => {
    try {
        const {collectionId, userId} = req.params;
        const {sum} = req.body;

        if (userId !== req.userId) {
            return res.status(403).json({
                error: {
                    message: 'Forbidden',
                    code: 403,
                },
            });
        }

        const collection = await Collection.findById(collectionId);
        if (!collection) {
            return res.status(404).json({
                error: {
                    message: 'CollectionCard not found',
                    code: 404,
                },
            });
        }

        if (collection.collectionStatus === 'Done') {
            return res.status(400).json({
                error: {
                    message: 'The collection is over!',
                    code: 400,
                },
            });
        }

        const donation = await Donation.create({
            sum: sum,
            collection: collectionId,
            user: userId,
        });
        res.send(donation);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

const getAllUserDonations = async (req, res) => {
    try {
        const {userId} = req.params;

        const candidate = await User.findById(userId);
        if (!candidate) {
            return res.status(404).json({
                error: {
                    message: 'User doesn\'t exist',
                    code: 404,
                },
            });
        }

        const userDonations = await Donation.find({user: userId});
        if (userDonations.length === 0) {
            return res.send('Currently here is no one donation!');
        }
        res.send(userDonations);
    } catch (error) {
        res.status(500).json({
            error: {
                message: error.message,
                code: 500,
            },
        });
    }
};

module.exports = {makeDonation, getAllUserDonations};