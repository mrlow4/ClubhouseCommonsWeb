exports.getArtists = function(req, res) {
    res.render('artists', {
        title: 'Featured Artists'
    });
};