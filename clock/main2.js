

const timeID = setInterval(timeAndDate, 1000);

function timeAndDate() {
    let hour2 = document.getElementById('hour2');
    let minute2 = document.getElementById('minute2');
    let second2 = document.getElementById('second2');
    let sss = document.getElementById('sss');
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = '';


    if(hour > 12) {
        hour = hour - 12
        session = 'PM';
        sss.innerText = session;
    }else {
        session = 'AM';
        sss.innerText = session;
    }


    if(hour == 0){
        hour = 12;
    }

    

    hour = hour <= 9 ? "0" + hour : hour;
    min = min <= 9 ? "0" + min : min;
    sec = sec <= 9 ? "0" + sec : sec;


    hour2.innerText = hour;
    minute2.innerText = min;
    second2.innerText = sec;
    
}


 