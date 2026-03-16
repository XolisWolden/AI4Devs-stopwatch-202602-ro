const toggle = document.getElementById("toggleDark")

/**
 * Applies the saved theme from localStorage to the document body.
 */
function applyTheme(){

const theme = localStorage.getItem("theme")

if(theme === "dark"){

document.body.classList.add("dark")

}

}

applyTheme()

if(toggle){

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark")

}else{

localStorage.setItem("theme","light")

}

})

}