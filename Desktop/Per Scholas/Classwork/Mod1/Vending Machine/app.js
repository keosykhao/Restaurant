// create a vending machine class that has an array of snacks

// set a name and price for the snacks
// create a function that allows the user to enter the array position of the snack and the snack will be returned
// be able to call the vendingMachine.vend()with a valid integer to return the snack

var vendingMachine = {
    snacks: [
    { 
        snack: "Oreos",
        price: "$1.50",
    },

    {
            snack: "Snickers",
            price: "$1.25",
    },
    {
            snack: "Doritos",
            price: "$1.00",
    }
    ],
    vend: sell = (num) => {
        if (num > 2){
            console.log("Snack not available")
        }
        else{
            console.log(vendingMachine.snacks[num].snack)
        }
        
    }
}
console.log(vendingMachine.snacks)
vendingMachine.vend(3)





