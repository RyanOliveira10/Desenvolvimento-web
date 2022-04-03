'use strict';

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

const start = document.getElementById('btn1');
const pause = document.getElementById('btn2');
const reset = document.getElementById('btn3');

start.addEventListener('click', Start);
pause.addEventListener('click', Pause);
reset.addEventListener('click', Reset);

function Start() {
    Pause();
    cron = setInterval(() => {
        Timer();
    }, 10);
};

function Pause() {
    clearInterval(cron);
};

function Reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
};

function Timer() {
    if((millisecond += 10) === 1000) {
        millisecond = 0;
        second++;
    }

    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        second = 0;
        hour++;
    }

    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);

    function returnData(input) {
        return input > 10 ? input: `0${input}`
    }

}