const package = require('./package')

module.exports = function(func) {
    if (func == 'version') {
        return package.version;
    }
}

// is function

module.exports.sus = function(susText) {
    return config.sus.includes(susText);
}

module.exports.rich = function(money, richType) {
    if (richType == undefined) return money >= config.rich.standert;
    else return money >= eval('config.rich.' + richType);
}

module.exports.year = function(year) {
    return year == new Date().getFullYear();
}

module.exports.month = function(month, date) {
    if (typeof date == 'string') {
        date = eval('config.month.' + date);
    }
    // convert month to number
    if (typeof month == 'string' && month != '0') {
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
            return month + ' its not a month';
            month = -1;
        }
    }
    // convert date to number
    if (typeof date == 'string') {
        if (date.toLowerCase() == 'january') date = 0;
        else if (date.toLowerCase() == 'february') date = 1;
        else if (date.toLowerCase() == 'march') date = 2;
        else if (date.toLowerCase() == 'april') date = 3;
        else if (date.toLowerCase() == 'may') date = 4;
        else if (date.toLowerCase() == 'june') date = 5;
        else if (date.toLowerCase() == 'july') date = 6;
        else if (date.toLowerCase() == 'august') date = 7;
        else if (date.toLowerCase() == 'september') date = 8;
        else if (date.toLowerCase() == 'october') date = 9;
        else if (date.toLowerCase() == 'november') date = 10;
        else if (date.toLowerCase() == 'december') date = 11;
        else {
            return date + ' its not a month';
            month = -1;
        }
    }

    if (month != -1 && date == undefined) return month == new Date().getMonth();
    else if (month != -1) return month == date;
}

module.exports.version = function(version) {
    return version == process.version;
}

module.exports.dead = function(dead) {
    return dead == 'dead' || dead == true;
}


//config
let config = {
    rich: {
        standert: 1000000
    },
    month: {

    },
    year: {

    },
    date: function(name, month, year) {
        eval('config.month.' + name + ' = ' + month);
        eval('config.year.' + name + ' = ' + year);
    },
    sus: ['sus', 'imposter', 'teacher'],
}
module.exports.config = config;
module.exports.isConfig = config;
module.exports.settings = config;
module.exports.isSettings = config;