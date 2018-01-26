const User = require('../models').User;
const CLReserve = require('../models').clreserve;

module.exports = {
    create(req, res) {
        return User
            .create(req.body, { fields: Object.keys(req.body) })
            .then(user => res.status(201).json(user))
            .catch(error => res.status(500).json(error));
    }, list(req, res) {
        return User
            .findAll({
                include: [{
                    model: CLReserve,
                    as: 'clreserves',
                }],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: CLReserve, as: 'clreserves' }, 'createdAt', 'ASC'],
                ],
            })
            .then((users) => res.status(200).json(users))
            .catch((error) => res.status(500).json(error));
    },
    // list(req, res) {
    //     return User
    //         .all()
    //         .then(user => res.status(200).json(user))
    //         .catch(error => res.status(500).json(error));
    // },
    // list(req, res) {
    //     return User
    //         .findAll({
    //             include: [{
    //                 model: CLReserve,
    //                 as: 'clreserves',
    //             }],
    //         })
    //         .then(user => res.status(200).json(user))
    //         .catch(error => res.status(500).json(error));
    // },
    retrieve(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: CLReserve,
                    as: 'clreserves',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        message: 'Cart/Lab Reservation Is Not Found',
                    });
                }
                return res.status(200).json(user);
            })
            .catch(error => res.status(500).json(error));
    },
    update(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: CLReserve,
                    as: 'clreserves',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        message: 'User Not Found',
                    });
                }
                return user
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(() => res.status(200).json(user))  // json back the updated user.
                    .catch((error) => res.status(500).json(error));
            })
            .catch((error) => res.status(500).json(error));
    },
    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(400).json({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).json({ message: 'User deleted successfully.' }))
                    .catch(error => res.status(400).json(error));
            })
            .catch(error => res.status(400).json(error));
    }
};