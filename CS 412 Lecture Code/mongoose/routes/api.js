const express = require('express');
const router = express.Router();

//Helper for authorization
//const authorized = require('./authCheck')

const mongoose = require('mongoose'); //ODM = Object Document Mapper
if (!mongoose.connection.db) {
    mongoose.connect('mongodb://localhost/cs591');
}
const db = mongoose.connection;
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: String,
    UID: String,
    department: String
//    _id: String : optional?
});
const people = mongoose.model('people', personSchema);


// POST Create a new user (only available to logged-in users)
//
//todo Temporarily removed auth check from this route for Angular demo
//router.post('/db', authorized, function (req, res, next) {
//todo replace the 'authorized' call for an add (removed for demo of Angular)
//router.post('/db', authorized, function (req, res, next) {
router.post('/db', function (req, res, next) {

    if (res.statusCode == 401) {
        console.log("Unauth attempt:", res.reason.message);
    }

    // let myNewPerson = {
    //     name: req.body.name,
    //     department: req.body.department,
    //     UID: req.body.UID;
    // }
    // new people(myNewPerson)
    //req.body._id="id2";
    aPerson = new people(
        req.body
    );

    aPerson.save(function (err) {
        if (err) {
            res.send(err.message);
        }
        //send back the new person
        else {
            res.send(aPerson);
        }
    });
});
//GET Fetch all users
router.get('/db', function (req, res, next) {
    people.find({}, function (err, results) {
        res.json(results);
    });

});
//http://localhost:3000/Bob/BUCS
router.get('/db/:name/:dept', function (req, res, next) {
    findByName(req.params.name)
        .then(function (status) {
            res.json(status.found);
        })
        .catch(function (status) {
            res.json(status);

        });
});

//GET Fetch single user, match /users/db/Frank
router.get('/db/:_id', function (req, res, next) {
    people.find({_id: req.params('_id')}, function (err, results) {
        res.json(results);
    });
});


//PUT Update the specified user's name
router.put('/db/:_id', function (req, res, next) {
    people.findByIdAndUpdate(req.params._id, req.body, {'upsert': 'true'}, function (err, result) {
        if (err) {
            res.json({message: 'Error updating'});
        } else {
            console.log('updated');
            res.json({message: 'success'});
        }

    });

});


//DELETE Delete the specified user
router.delete('/db/:_id', function (req, res, next) {
    people.findByIdAndRemove(req.params._id, function (err, result) {
        if (err) {
            res.json({message: 'Error deleting'});
        } else {
            res.json({message: 'success'});
        }
    });
});


let findByName = function (checkName) {
    return new Promise(function (resolve, reject) {
        people.find({name: checkName}, function (err, results) {
            console.log(results, results.length);
            if (results.length > 0) {
                resolve({found: results});
            } else {
                reject({found: false});
            }
//    return ( (results.length  > 0) ? results : false)
        });
    });
};

module.exports = router;

//TODO Route to log out (req.logout())

//Date.now()
//
// router.route('/db')
//     .post(function (req, res, next) {
//
//     })
//     .get(function (req, res, next) {
//
//     })
//     .delete(function (req, res,next) {
//
//     })

//
// const name = req.body.name
// const departemnt = req.body.depaertment
