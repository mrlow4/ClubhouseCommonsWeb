/* GET Homepage*/
const donations = require('../config/donations.js');

const index = (req, res) => {
    const percent = Math.round(
        (donations.currentAmount / donations.goalAmount) * 100
    );

    res.render("index", {
        title:"Clubhouse Commons Main Page",
        currentAmount: donations.currentAmount,
        goalAmount: donations.goalAmount,
        percent
    });
};

module.exports = {
    index
}