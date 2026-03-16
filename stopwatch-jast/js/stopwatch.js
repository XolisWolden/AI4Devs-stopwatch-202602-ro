let seconds = 0
let interval = null
let running = false

const display = document.getElementById("display")
const startPause = document.getElementById("startPause")
const reset = document.getElementById("reset")

/**
 * Formats seconds into HH:MM:SS string.
 * @param {number} s - Total seconds.
 * @returns {string} Formatted time string.
 */
function formatTime(s){

let h = Math.floor(s/3600)
let m = Math.floor((s%3600)/60)
let sec = s%60

return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`

}

/**
 * Updates the stopwatch by incrementing seconds and refreshing display.
 */
function update(){

seconds++

display.textContent = formatTime(seconds)

}

startPause.onclick=()=>{

if(!running){

interval=setInterval(update,1000)

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

display.textContent = formatTime(seconds)

}

}