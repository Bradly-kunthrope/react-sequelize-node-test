const CLReserve = require('../models').clreserve;

module.exports = {
    create(req, res) {
        return CLReserve
            .create( req.body, { fields: Object.keys(req.body) })
            .then(clreserve => res.status(201).json(clreserve))
            .catch(error => res.status(400).json(error));
    },
    update(req, res) {
        return CLReserve
            .find({
                where: {
                    id: req.params.clreserveId,
                    userId: req.params.userId,
                },
            })
            .then(clreserve => {
                if (!clreserve) {
                    return res.status(404).json({
                        message: 'CLReserve Not Found',
                    });
                }

                return clreserve
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(updatedCLReserve => res.status(200).json(updatedCLReserve))
                    .catch(error => res.status(400).json(error));
            })
            .catch(error => res.status(400).json(error));
    },

    destroy(req, res) {
        return CLReserve
            .find({
                where: {
                    id: req.params.clreserveId,
                    userId: req.params.userId,
                },
            })
            .then(clreserve => {
                if (!clreserve) {
                    return res.status(404).json({
                        message: 'CLReserve Not Found',
                    });
                }

                return clreserve
                    .destroy()
                    .then(() => res.status(204).json())
                    .catch(error => res.status(400).json(error));
            })
            .catch(error => res.status(400).json(error));
    },
};