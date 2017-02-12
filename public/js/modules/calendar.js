getCalendarEvents = function() {
    console.log("calendar requested..");
    if (num < 0 || num > 12) {
        return "Invalid param";
    }
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    return months[num-1];
}

module.exports = {
    getCalendarEvents
}
