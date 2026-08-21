const bcrypt = require('bcryptjs');

exports.getLogin = function(req, res) {
    res.render('login', {
        title: 'Admin Login'
    });
};

exports.login = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const correctUsername =
        username === process.env.ADMIN_USERNAME;

    const correctPassword = bcrypt.compareSync(
        password,
        process.env.ADMIN_PASSWORD_HASH
    );

    if (correctUsername && correctPassword) {
        req.session.isAdmin = true;

        return res.redirect('/admin');
    }

    res.render('login', {
        title: 'Admin Login',
        error: 'Incorrect username or password.'
    });
};

exports.logout = function(req, res) {
    req.session.destroy(function() {
        res.redirect('/login');
    });
};