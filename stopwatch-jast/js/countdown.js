let seconds = 0
let running = false
let interval = null

const display = document.getElementById("display")
const startPause = document.getElementById("startPause")
const reset = document.getElementById("reset")
const keypad = document.getElementById("keypad")
const alarm = document.getElementById("alarm")

function formatTime(s){

let h = Math.floor(s/3600)
let m = Math.floor((s%3600)/60)
let sec = s%60

return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`

}

function updateDisplay(){

display.textContent=formatTime(seconds)

}

function tick(){

seconds--

updateDisplay()

if(seconds<=0){

clearInterval(interval)

running=false

alarm.play()

}

}

for(let i=0;i<=9;i++){

let btn=document.createElement("button")

btn.className="btn"

btn.textContent=i

btn.onclick=()=>{

seconds=seconds*10+i

updateDisplay()

}

keypad.appendChild(btn)

}

startPause.onclick=()=>{

if(seconds<=0){

display.style.color="red"

return

}

if(!running){

interval=setInterval(tick,1000)

running=true

startPause.innerHTML='<i class="fa-solid fa-pause"></i> Pausar'

}else{

clearInterval(interval)

running=false

startPause.innerHTML='<i class="fa-solid fa-play"></i> Iniciar'

}

}

reset.onclick=()=>{

if(!running){

seconds=0

updateDisplay()

}

}