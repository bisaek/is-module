const package = require('./package')

module.exports = function(func) {
    if (func == 'version') {
        return package.version
    }
}


module.exports.sus = function(susText) {
    return susText == 'sus' || susText == 'imposter';
}
module.exports.rich = function(money) {
    return money >= 1000000;
}
module.exports.year = function(year) {
    return year == new Date().getFullYear();
}
module.exports.month = function(month) {
    return month == new Date().getMonth();
}
module.exports.version = function(version) {
    return version == process.version;
}