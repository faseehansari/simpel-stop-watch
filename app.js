console.log('Hello, world');
let anmt1 =document.querySelector(".main")
let anmt2 =document.querySelector(".main2")

console.log(anmt1);
console.log(anmt2);

let hour = document.querySelector(".hour")
let mint = document.querySelector(".mint")
let second = document.querySelector(".sec")
let millisec = document.querySelector(".millisec")

let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".reset")

let mili = 0
let sec = 0
let minate = 0
let hourr = 0

let interval = null

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)

function startTimer(){

    anmt1.classList.add("BOX")
    anmt2.classList.add("BOX-2")

    if(interval !== null){
        return
    }

    interval = setInterval(function(){

        mili++

        if(mili == 100){
            mili = 0
            sec++
        }

        if(sec == 60){
            sec = 0
            minate++
        }

        if(minate == 60){
            minate = 0
            hourr++
        }

        if(hourr == 24){
            hourr = 0
        }

        if(mili < 10){
            millisec.textContent = "0" + mili
        }else{
            millisec.textContent = mili
        }

        if(sec < 10){
            second.textContent = "0" + sec
        }else{
            second.textContent = sec
        }

        if(minate < 10){
            mint.textContent = "0" + minate
        }else{
            mint.textContent = minate
        }

        if(hourr < 10){
            hour.textContent = "0" + hourr
        }else{
            hour.textContent = hourr
        }

    },10)
}

function stopTimer(){

       anmt1.classList.remove("BOX")
    anmt2.classList.remove("BOX-2")
    clearInterval(interval)
    interval = null
}

function resetTimer(){

           anmt1.classList.remove("BOX")
    anmt2.classList.remove("BOX-2")
    clearInterval(interval)
    interval = null

    mili = 0
    sec = 0
    minate = 0
    hourr = 0

    millisec.textContent = "00"
    second.textContent = "00"
    mint.textContent = "00"
    hour.textContent = "00"
}