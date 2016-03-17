//Jordan Stein
var express = require('express');
var app = express();

// GET request
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
 

    var GitHubApi = require("github");

    var github = new GitHubApi({
        // required
        version: "3.0.0"
    });


    var token = "I put my token in here on Apigee";

    github.authenticate({
        type: "oauth",
        token: token
    });

    github.user.get({ user: 'jtstein'} , function(err, resp) {
        
        console.log("GOT ERR?", err);
        console.log("GOT RES?", resp);
        res.send(resp);

        github.repos.getAll({}, function(err, res) {
            console.log("GOT ERR?", err);
            console.log("GOT RES?", res);
        });
    });
    
    console.log("testpls");
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})