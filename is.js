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
    if (typeof month == 'string') {
        if (month.toLowerCase() == 'january') month = 0;
        else if (month.toLowerCase() == 'february') month = 1;
        else if (month.toLowerCase() == 'march') month = 2;
        else if (month.toLowerCase() == 'april') month = 3;
        else if (month.toLowerCase() == 'may') month = 4;
        else if (month.toLowerCase() == 'june') month = 5;
        else if (month.toLowerCase() == 'july') month = 6;
        else if (month.toLowerCase() == 'august') month = 7;
        else if (month.toLowerCase() == 'september') month = 8;
        else if (month.toLowerCase() == 'october') month = 9;
        else if (month.toLowerCase() == 'november') month = 10;
        else if (month.toLowerCase() == 'december') month = 11;
        else {
            month = 0;
            return month + ' its not a month';
        }
    }
    if (month != 0) return month == new Date().getMonth();
}
module.exports.version = function(version) {
    return version == process.version;
}