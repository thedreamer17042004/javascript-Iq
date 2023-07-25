function timer() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = '';
    let day1 = document.getElementById('day');
    let month1 = document.getElementById('month');
    let year1 = document.getElementById('year');
    let hour1 = document.getElementById('hour');
    let minute1 = document.getElementById('minute');
    let second1 = document.getElementById('second');
    let session1 = document.getElementById('sessionj');
    if(hour == 0) {
        hour = 12;
    }else if(hour > 12) {
        hour = hour - 12;
        session = 'PM'
    }else {
        session = 'AM'
    }

    hour = hour <= 9 ? '0' + hour : hour;
    minute = minute <= 9 ? '0' + minute : minute;
    second = second <= 9 ? '0' + second : second;

    month = month + 1

    let time = day + "/" + month  + "/" + year + "--" +  hour + ":" + minute + ":" + second + " " + session;

    console.log(time);

    day1.innerText = day;
    month1.innerText = month;
    year1.innerText = year;
    hour1.innerText = hour;
    minute1.innerText = minute;
    second1.innerText = second;
    session1.innerText = session;

    let t = setTimeout(function(){ timer() }, 1000);
}

timer();