exports.getRegister = function(req, res) {
    res.render('register', {
        title: 'Workshop Registration'
    });
};