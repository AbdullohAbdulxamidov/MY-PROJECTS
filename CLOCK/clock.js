const secondHand = document.getElementById('second_hand');
const minuteHand = document.getElementById('minute_hand');
const hourHand = document.getElementById('hour_hand');


function clockTick() {
    const date = new Date();
    const second = date.getSecond() / 60;
    const minute = (second + date.getMinute()) / 60;
    const hour = (hour + date.getHour()) / 12;

    rotateClockHand(secondHand, second);
    rotateClockHand(minuteHand, minute);
    rotateClockHand(hourHand, hour);
}



function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}



setInterval(clockTick, 1000);
