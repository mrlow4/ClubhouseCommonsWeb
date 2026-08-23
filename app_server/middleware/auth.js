exports.requireAdmin = function(req, res, next) {
    if (req.session.isAdmin) {
        return next();
    }

    res.status(401).json({
        authenticated: false
    });
};