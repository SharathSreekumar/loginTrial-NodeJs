var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
//var mongoose = require('mongoose');

var usr = require('../models/Users');

//for get operation
exports.createUser = function(req,res){
	res.render('index');//as signup & login are in same page
}

//for post operation
exports.postNewUser = function(req,res){//create new account using post
    if(req.body.spwrd == req.body.cnpwrd){
        var userAcc = new usr();  // usr is same as the variable, acts as object for Users.js
        userAcc.userid = req.body.user;
        userAcc.password = req.body.spwrd;
        userAcc.save();
        console.log('Successful');
        res.render('index');
    }
}

//for post operation
exports.getUserByUser = function(req,res){//for searching the specific user i.e. for Login
    var userAcc = new usr();
    usr.find(req.body.uname,function(err,user){
        if(err)
            res.send(err);
        for(var u in user){
            if(req.body.uname == user[u].userid && req.body.lpwrd == user[u].password){ // search for the user & passwrd
                //res.send("Login Successful...");
                console.log('Login Successful...');
                res.render('index');
            }else if(req.body.uname == user[u].userid && req.body.lpwrd != user[u].password){
                //res.send("Invalid Password...");
                console.log('Invalid Password...');
                res.render('index');
            }
        }
    });
}