import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import dotenv from 'dotenv';

import User from '../models/user-model';
import Question from '../models/question-model';

var GoogleStrategy = require('passport-google-oauth20').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
dotenv.load();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

//// START GOOGLE AUTH STRAT ////
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return cb(err, user);
        })
    }
));
//// END GOOGLE AUTH STRAT ////

//// START BEARER STRAT ////
passport.use(new BearerStrategy(
    (token, done) => {
        User.findOne({accessToken: token}, (err, user) => {
            if (err) {
                return done(null, false);
            }
            if (!user) {
                return done(null, false);
            }
            return done(null, user[0]);
        });
    }
));
//// END BEARER STRAT ////

//// START AUTH REQUESTS ////
app.get('/auth/google', passport.authenticate('google', {scope:['profile']}));

app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: 'login'}),
    (req, res) => {
        // Successful authentication, redirect home
        res.redirect('/');
    }
);

//// END AUTH REQUESTS ////

//// START USERS ////
app.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(users);
    });
});

app.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndRemove(userId, (err, user) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(user);
    });
});
//// END USERS ////

//// START QUESTIONS ////

//// END QUESTIONS ////

function runServer() {
    let databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/spanish-x';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUri).then(function() {
       app.listen(PORT, HOST, (err) => {

            if (err) {
                console.error(err);
                return(err);
            }
            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}

