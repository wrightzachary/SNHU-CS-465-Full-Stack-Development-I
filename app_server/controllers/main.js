const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));
const sidebarItems = JSON.parse(fs.readFileSync('./data/index_sidebar_links.json', 'utf8'));

const index = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Home';
    res.render('index', {title: pageTitle, blogs, sidebarItems});
}

module.exports = {
    index
}