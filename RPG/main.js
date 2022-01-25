const readline = require("readline-sync");
console.log("Welcome to the Colossal RPG!")
let playerName = readline.question("What is your name adventurer? ")
console.log("Great to see you " + playerName + " we have awaited your arrival, let's begin!")

let playerInventory = ["Inventory:", "Sword", "Shield"] 
let playerStats = [
    playerName = playerName,
    playerHp = ["Health:", 100],
    playerGoldCoins = ["Gold Coins:", 250],
    playerItems = ["Items:", ]
]
isAlive = true
let ogreName = "Gronk The Giant"
console.log("Brave adventurer our town has been ravaged by an Ogre that goes by the name of " + ogreName + " will you help us defeat him?")

function enemies(enemyName, enemyHp, enemyLoot) {
    this.enemyName = enemyName
    this.enemyHp = 50
    this.enemyLoot = enemyLoot
}
const enemyName = ['Spider', 'Zombie', "Wolf", + ogreName]

function createNewEnemy(){
    let newNum = Math.floor(Math.random() * 4)
    if(newNum === 0){
        return new enemies("Spider")
    } else if (newNum === 1){
        return new enemies("Zombie")
    } else if (newNum === 2){
        return new enemies("Wolf")    
    } else if (newNum === 3){
        return new enemies(ogreName)
    }

}
 
while (isAlive == true) {
    let input = readline.question("Press 'w' to walk, or press 'p' OR 'print' to look at your inventory and HP")
    walk(input)
}
function walk(input) {
    if(input === "w") {
        let randomEnemy = Math.floor(Math.random() * 4)
        if(randomEnemy === 2) {
            let newEnemy = createNewEnemy()
            console.log(`Look out! A new enemy named ${newEnemy.enemyName}! has appeared!`)
            fight()
        }
        else if (randomEnemy === 1) {
            console.log("You walk further and further down your path")
        }
        else if (randomEnemy === 3) {
            console.log("You begin to wonder if you have slayed all the enemies... No you must find and slay Gronk")
        }
        else if (randomEnemy === 0) {
            console.log("All this walking quenches your thirst. You hope to find an Inn soon for some Ale and a nice warm bed")
        }
        else if (randomEnemy === 4) {
            console.log("You've been walking for ages. You hope the coin is worth the amount of hassle.")
        }
    }else if(input === 'p'){
        console.log(playerStats, playerInventory)
    }else if(input === 'l'){
        process.exit()
    }
    
    function fight(attack, run){
            let isFighting = true
            while(isFighting) {
                let attackOrRun = readline.question('An enemy is approaching! Would you like to attack [f] or flee?[r]')
                if(attackOrRun === 'f'){
                    attack()
                } else if (attackOrRun === 'r') {
                console.log("You begin to flee from the enemy. Hopefully you are faster than your adversary")
                run();
                }
                function run(){
                    runOrGetCaught = Math.floor((Math.random() * 2) + 1)
                    if(runOrGetCaught === 1) {
                        console.log("The enemy was quicker than you and forces you to fight them!")
                        isFighting
                        attack()
                    }
                    else{
                        console.log("You proved to be faster than your enemy and was able to get away. You might not be so lucky next time.")
                        isFighting = !isFighting
                        walk()
                    }
                }
                function attack(){
                    fightScreen()

                }
            function fightScreen(attackPower, playerHp, playerAttack, playerDead, playerVictory, playerLoss, enemyHp, enemyAttack){
                let playerHitPoints = 100;
                let enemyHitPoints = 25;
                isFighting
                    while(playerHitPoints > 0 || enemyHitPoints > 0){
                        let enemyAtt = Math.floor((Math.random() * 10) + 1)
                        if(playerHitPoints > 0){
                            let playerHp = playerHitPoints -= enemyAtt
                            console.log("The enemy strikes you! They did " +enemyAtt+ "total damage to you. Your HP is now equal to " +playerHp)
                        }
                        else if (playerHitPoints <= 0){
                            playerLoss()
                            break;
                        }
                        let attack = Math.floor((Math.random() * 10) + 1)
                        if(enemyHitPoints > 0){
                            // let totalHit = attackPower + attack
                            let enemyHp = enemyHitPoints -= attack;
                            console.log("You strike the enemy with great power! You dealt" +attack+ "and now their HP is equal to" +enemyHp)
                        }
                        else if(enemyHitPoints <= 0) {
                        enemyLoss()
                        break
                        }                    
                    }
                    function playerLoss(){
                        console.log(`${playerName} the enemy has slayed you brave adventurer. You can always try again, Gronk must be defeated`)
                        isAlive == false
                        process.exit()
                    }
                    function newDrop(enemyLoot, playerStats){
                        enemyLoot = ['Dagger', 'Bow', 'Ogre Slayer Broad Axe']
                        let newItem = enemyLoot[Math.floor(Math.random() * enemyLoot.length)]
                        playerItems.push(newItem)
                        console.log(playerItems)
                        console.log("You have successfully defeated the enemy! Your stats have improved and you recieve loot from the enemy! " +newItem)

                    }

                   
                
                    function enemyLoss(playerStats, playerInventory){
                        newDrop()
                        statRestore = Math.floor((Math.random()* 10)+ 10)
                        let newStats = playerHp += statRestore
                        isFighting = false
                        walk()


                    

}
}
}
}
}
