let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();


hours.innerHTML = h;
minute.innerHTML = m;
seconds.innerHTML = s;
