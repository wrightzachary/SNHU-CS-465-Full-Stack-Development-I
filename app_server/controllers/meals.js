const fs = require('fs'); 
const foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, foods});
}

module.exports = {
    meals
}