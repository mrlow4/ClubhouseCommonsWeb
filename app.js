require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
const session = require('express-session');

// routers! :)
var indexRouter = require('./app_server/routes/index');
var tempRouter = require('./app_server/routes/temp');
var aboutRouter = require('./app_server/routes/about');
var artistsRouter = require('./app_server/routes/artists');
var cafeRouter = require('./app_server/routes/cafe');
var eventsRouter = require('./app_server/routes/events');
var fundsRouter = require('./app_server/routes/funds');
var loginRouter = require('./app_server/routes/login');
var adminRouter = require('./app_server/routes/admin');
var workshopsRouter = require('./app_server/routes/workshops');

// engine to support automatic layouts
const { engine } = require("express-handlebars");

var app = express();

app.engine("hbs", engine({
  extname: ".hbs",
  defaultLayout: "layout",
  layoutsDir: path.join(__dirname, "app_server", "views", "layouts"),
  partialsDir: path.join(__dirname, "app_server", "views", "partials")
}));

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); 

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

// routes! :))
app.use('/', indexRouter);
app.use('/', tempRouter);
app.use('/about', aboutRouter);
app.use('/artists', artistsRouter);
app.use('/cafe', cafeRouter);
app.use('/events', eventsRouter);
app.use('/funds', fundsRouter);
app.use('/api/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/workshops', workshopsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
