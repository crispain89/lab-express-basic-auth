// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

const flash = require('connect-flash');
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();
require('./config/session.config')(app);
require('./config')(app);


app.use(flash());

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-basic-auth';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/user.routes')
app.use('/user', user)

app.use((req, res, next)=>{
    app.locals.success = req.flash('success')
    next();
});
  
app.get('/flash', function (req, res) {
    req.flash("success", "Your message");
    res.redirect("/")
    // Set a flash message by passing the key, followed by the value, to req.flash().
    // req.flash('info', 'Flash is back!')
    // res.redirect('/a');
  });
   
app.get('/a', function (req, res) {
      console.log(req.flash("info")[0])
    // Get an array of flash messages by passing the key to req.flash()
    res.render('index', { messages: req.flash('info')[0] });
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;

