// Checks if user is authenticated as the admin
exports.getAdmin = function(req, res) {
    res.json({
        authenticated: true
    });
};