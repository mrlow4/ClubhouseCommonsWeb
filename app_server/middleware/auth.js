exports.requireAdmin = function(req, res, next) {
    if (req.session.isAdmin) {
        return next();
    }

    res.redirect('/login');
};