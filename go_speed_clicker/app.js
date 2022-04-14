let count = 0
let button = document.getElementById("button")
let display = document.getElementById("clickCount")

button.addEventListener("click", function clickSaver(){
    count++;
    display.innerHTML = count
    localStorage.myCount = count
})
function clickGetter() {
    let myCount = localStorage.myCount;
    display.innerHTML = myCount
}
setInterval(function(){   
    button.disabled = true
}, 30000)
clickGetter();



    