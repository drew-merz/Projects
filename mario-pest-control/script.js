let goomba = document.getElementById("goomba")
let bobomb = document.getElementById("bobomb")
let cheepCheep = document.getElementById("cheepCheep")

let goombaCaught = document.getElementById("goombaCaught")
let bobombCaught = document.getElementById("bobombCaught")
let cheepCheepCaught = document.getElementById("cheepCheepCaught")
let userTotal = document.getElementById("userTotal")

const turnInButton = document.getElementById("turnInButton")
turnInButton.addEventListener('click', function(event){
    event.preventDefault()
    let goombaPrice = goombaCaught.value * 5
    let bobombPrice = bobombCaught.value * 7
    let cheapCheapPrice = cheepCheepCaught.value * 11
    let total = Number(goombaPrice) + Number(bobombPrice) + Number(cheapCheapPrice)
    userTotal.innerHTML = total + (" coins")
})




