const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');


module.exports = (app) => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: true,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 3000
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/basic-auth"
            })
        })
    );
};