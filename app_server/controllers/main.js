/* GET Homepage*/
const index = (req, res) => {
    res.render("index", {title:"Clubhouse Commons Main Page"});
};

module.exports = {
    index
}