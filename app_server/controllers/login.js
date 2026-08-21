const bcrypt = require('bcryptjs');

exports.login = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const correctUsername =
        username === process.env.ADMIN_USERNAME;

    const correctPassword = bcrypt.compareSync(
        password,
        process.env.ADMIN_PASSWORD_HASH
    );

    if (!correctUsername || !correctPassword) {
        return res.status(401).json({
            success: false,
            message: 'Incorrect username or password.'
        });
    }

    req.session.isAdmin = true;

    res.json({
        success: true
    });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true
        });
    });
};