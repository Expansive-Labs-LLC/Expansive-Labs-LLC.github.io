const { DateTime } = require("luxon");

module.exports = {
    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(new Date(date)).toUTC().toFormat(String(format));
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(new Date(date)).toUTC().toISO({
            suppressMilliseconds: true
        });
    },

    obfuscate: function (str) {
        return str.split("").map(char => `&#${char.charCodeAt(0)};`).join("");
    }
};
