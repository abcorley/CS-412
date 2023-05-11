const request = require('request')
const {APIKey} = require('../config');

var express = require('express');
var router = express.Router();

// Callback Function for retrieving data
const doReqCallback = (query, callback) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + APIKey +
        '&language=en-US&query=' + query + '&page=1&include_adult=false';
    request(url, (error, response, body)=>{
        const data = JSON.parse(body)
        // Printing the error if occurred
        if(error) {
            console.log(error)
            throw new Error(error);
        }
        else {
            callback(data);
            console.log(`Received ${JSON.stringify(data)}}`);
            return data;
        }
    })

}

// Promise Function for retrieving data
const doReqPromise = function(query) {
    return new Promise(function (resolve, reject) {  //reject is optional  --this technique is called 'Promisifying'
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + APIKey +
            '&language=en-US&query=' + query + '&page=1&include_adult=false';
        request(url, function (error, response, body) {  //another example of err-first pattern
            if (error){
                console.log(error)
                throw new Error(error)
            }
            else {
                resolve(body)
            }
        })

    })
}

// Async Function for retrieving data
const doReqAsync = async (query) => {
    let returnValueRaw = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey +
        '&language=en-US&query=' + query + '&page=1&include_adult=false');
    let returnValue = await returnValueRaw.json(); //.json() buffers the stream, and then un-stringifies it for us (THIS IS AN ASYNC OPERATION)
    return returnValue;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Movie Search' });
});

//Retrieves data from API using callbacks
router.post('/resultsCallback', function(req, res,next){
  const input = req.body;
  let query = input.Movie;
  doReqCallback(query, function (data) {
      res.render('results', {title: 'Results', query: query, data});
  });

});

//Retrieves data from API using promises
router.post('/resultsPromise', function(req, res,next){
    const input = req.body;
    let query = input.Movie;
    doReqPromise(query) //the new promise returns right here. It has a .then method.
        .then(function (results) {
            console.log(`Received ${JSON.stringify(results)}}`);
            const data = JSON.parse(results);
            res.render('results', {title: 'Results', query: query, data});
        })
        .catch(err => console.log('in the catch', err))
});

//Retrieves data from API using Async/await
router.post('/resultsAsync', function(req, res,next){
    const input = req.body;
    let query = input.Movie;
    doReqAsync(query)
        .then(
            data => {
                console.log(`Received ${JSON.stringify(data)}}`);
                res.render('results', {title: 'Results', query: query, data});
            },
            error => {
                console.log(`Rejected with ${error}`)
            }
        )

});

module.exports = router;

