const refreshTime = 1000;

setInterval(logClockTime, refreshTime);

function logClockTime() {
    var time = getClockTime();

    console.clear();
    console.log(time);
}

function getClockTime() {
    var date = new Date();
    var time = {
        hours: date.getHours(),
        minites: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    }

    if (time.hours === 12) {
        time.ampm = 'PM';
    } else if (time.hour > 12) {
        time.ampm = 'PM'
        time.hours -= 12;
    }

    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }

    if (time.minites < 10) {
        time.minites = '0' + time.minites;
    }

    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds;
    }

    return time.hours + ":"
        + time.minites + ":"
        + time.seconds + " "
        + time.ampm;
}
