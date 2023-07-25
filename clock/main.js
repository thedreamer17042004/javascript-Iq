// phase 1
//a clock is running "Hour: Miniute: Seconds"
// 01:25:30s

// phase 2
// 60s back 0s-1s => +1minute
// 60minutes back 0sminute-60minutes => +1hour
// 24h back continuous ...............


// phase 3
// strategies for this ideal
// how to run from 0 -60 => setInterval and clearInterval
// how to add  a 0 before the number if it is from 0 - 9
// how to increment hour number or minute number when the number is end 60



var counterSecond = 0;
var counterMinute = 0;
var counterHour = 0;
var sesionx = "";

function myStopFunction() {
    clearInterval(myInterVal);
}
function clock() {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let session1 = document.getElementById('sessionj');
    counterSecond = counterSecond + 1;
    if(counterSecond < 10) {
       var a = String(counterSecond).padStart(2, '0');
       second.innerText = a;
    }else if(counterSecond == 60) {
        if(counterMinute <= 8) {
            counterMinute = '0' + ++counterMinute;
            minute.innerText = counterMinute;

        }else if(counterMinute > 59) {
            counterMinute = '0' + 0;
            minute.innerText = counterMinute;

            if(counterHour <= 8) {
                counterHour = '0' + ++counterHour;
                 hour.innerText = counterHour;
                sesionx =  "-AM";
                 session1.innerText = sesionx;
            }else {
                counterHour = ++counterHour;
                hour.innerText = counterHour;
                    sesionx =  "-PM";
                 session1.innerText = sesionx;
                
            }
        }
        else {
            counterMinute = ++counterMinute;
            minute.innerText = counterMinute;

        }
    }else if(counterSecond > 60) {
        counterSecond = 0;
    }
    else {
       second.innerText = counterSecond;
    }



}

var myInterVal = setInterval(clock, 1000);

