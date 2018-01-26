const usersController = require('../controllers').users;
const clreservesController = require('../controllers').clreserves;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));

//The bridge from front-end to back is the next four lines :P
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


//Users CRUD
    app.post('/api/users', usersController.create);
    app.get('/api/users/:userId', usersController.retrieve);
    app.put('/api/users/:userId', usersController.update);
    app.delete('/api/users/:userId', usersController.destroy);
    app.get('/api/users', usersController.list);

//Reservation CL CRUD
    app.post('/api/users/:userId/clreserves', clreservesController.create);
    app.get('/api/users/:userId/clreserves/:clreservesId', clreservesController.update);
    app.delete('/api/users/:userId/clreserves/:clreservesId', clreservesController.destroy);


};