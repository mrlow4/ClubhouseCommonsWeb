exports.getAdmin = function(req, res) {
    res.render('admin', {
        title: 'Admin Page'
    });
};