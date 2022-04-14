class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        if(namePicked === mario){
            this.name = mario
        } else if(namePicked){
            this.name = luigi
        }
    } 
    gotHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        }
        if(this.status === "Big"){
            this.status = "Small"
        }
        if(this.status === "Small"){
            this.status = "Dead"
            return false;
        }
    }
    gotPowerUp(){
        if(this.status === "Small"){
            this.status = "Big"
        }
        else if(this.status === "Big"){
            this.status = "Powered Up"
            this.star = true
        }
        else if(this.status === "Small"){
              this.status === "Dead"
        }
        
    }
    addCoin(){
        this.totalCoins += 1
    }

    print(){
        console.log(`Name = ${this.name},
        Total Coins: ${this.totalCoins},
        Status: ${this.status},
        Stars: ${this.hasStar}`)
        if(this.status === "Dead"){
            console.log("You Died")
            clearInterval
        }
    }
}

const user = new Player("Mario", 0, "Small", false)

const game = (user) => {
    let randomNum = Math.ceil(Math.random() * 3)
    if(randomNum === 1){
        user.gotHit()
        user.print()
    }
    else if(randomNum === 2){
        user.addCoin()
        user.print()
    }
    else if(randomNum === 3){
        user.gotPowerUp()
        user.print()
    }
}

const gameStart = setInterval(()=>
    game(user), 2000)
