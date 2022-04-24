// Where are the source files, where are you working from, where are public facing files
/*  
    input: "src"
    Output doesn't need to be added but will default to
        output: "_site"

    
*/

const {DateTime} = require('luxon')

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}