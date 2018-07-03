const path = require("path");


const countries = [
    {
        locale: 'au',
    },
    {
        locale: 'nz',
    },
    {
        locale: 'us',
    },
]

module.exports = function(data, createPage) {
    const homePageTemplate = path.resolve("src/pages/index.js");
    countries.forEach((country, index) => {
        createPage({
            path: `/${country.locale}/`,
            component: homePageTemplate,
            layout: `new-layout`,
            context: {
                locale: country.locale
            }
        })
    })
};  
