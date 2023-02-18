const fs = require('fs');
const ads = JSON.parse(fs.readFileSync('./data/about_ads.json', 'utf8')); 

const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - About';
    res.render('about', {title: pageTitle, ads});
}

module.exports = {
    about
}