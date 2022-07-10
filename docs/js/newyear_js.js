function time_remaining(){
    // fetch todays date and initialize a target date
    var today_date = new Date();
    var target_date = new Date("Dec 31, 2022 23:59:59");
    // calculate millisecond difference between dates
    var diff = target_date.getTime() - today_date.getTime();

    // millisecond conversion rounded to floor
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(diff / (1000 * 60));
    var hours = Math.floor(diff / (1000 * 3600));
    var days = Math.floor(diff / (1000 * 3600 * 24));
    var weeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
    var months = Math.floor(diff / (1000 * 3600 * 24 * 7 * 4.34));

    // update tags in HTML code
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("days").innerHTML = days;
    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("months").innerHTML = months;
}
time_remaining();
