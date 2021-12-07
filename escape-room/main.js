const readline = require("readline-sync");
const name = readline.question("What is your name?  ");
console.log("Welcome to the Escape Room " + name);


var isAlive = true;
var hasKey = false;
while (isAlive == true) {
        let action = readline.keyIn("Enter 0 to put your hand in the hole \nEnter 1 to search for the key\nEnter 2 to open the door ");
        if (action == 0) {
            console.log("You reach inside the hole and something on the other side pulls you through and eats you!");
            console.log("You have died, please try again. ");
            isAlive = false
        }
            else if(action == 1) {
                if (hasKey == false) {
                    console.log("You search the crates and boxes near you... You find a shiny golden key! ")
                    hasKey = true
                } else if (hasKey == true) {
                    console.log("You have already found the key... Please select another option. ")
                }
            }
            else if (action == 2) {
                if (hasKey == false) {
                console.log("You attempt to jiggle the doorknob but it is locked... Maybe you need a key? ");
                } else if (hasKey = true) {
                    console.log("You use the shiny golden key you found to unlock the door... IT WORKS!");
                    console.log("Well done " + name + " you have successfully escaped the room!");
                    break;
        }
    }
}





    





    


    
    


