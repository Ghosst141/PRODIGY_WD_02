let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval=null;

let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');


start.addEventListener('click',()=>{
   if(interval){
    clearInterval(interval);
   }
   interval = setInterval(display,10);
   start.innerHTML='Start';
})
pause.addEventListener('click',()=>{
    clearInterval(interval);
    start.innerHTML='Re-start';
})
reset.addEventListener('click',()=>{
    clearInterval(interval);
    timer.innerHTML=`00 : 00 : 00 : 000`;
    ms=0;
    sec=0;
    min=0;
    hr=0;
    start.innerHTML='Start';    
})
function display() {
    ms+=10;
    if (ms === 1000) {
        sec++;
        ms = 0;
    }
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hr++;
        min = 0;
    }
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let msec = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    console.log(`${h} : ${m} : ${s} : ${msec}`);
    timer.innerHTML=`${h} : ${m} : ${s} : ${msec}`;
}
