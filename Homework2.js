/*
Author: Alexandre Geguchadze
Homework: 2
Date: 16.05.2020
*/

// 1)
let car = {
    brand: "Audi", 
    color: "white",
    model: "A4",
    year: 2019,
    horsePower: 190,
    priceIn$: 20000
}

console.log(`This car has the following characteristics:
 brand - ${car.brand},
 color - ${car.color},
 model - ${car.model},
 year - ${car.year},
 horsePower - ${car.horsePower},
 priceIn$ - ${car.priceIn$}.`)


 //2)

let car1 = {
    brand: "Toyota", 
    color: "gray",
    model: "Camry",
    year: 2017,
    horsePower: 150,
    priceIn$: 7500
}

let car2 = {
    brand: "Porsche", 
    color: "red",
    model: "Macan",
    year: 2015,
    horsePower: 252,
    priceIn$: 35000
}

let car3 = {
    brand: "BMW", 
    color: "black",
    model: "X5",
    year: 2011,
    horsePower: 555,
    priceIn$: 15500
}

let car4 = {
    brand: "Kia", 
    color: "brown",
    model: "Optima",
    year: 2015,
    horsePower: 245,
    priceIn$: 5500
}

let car5 = {
    brand: "Nissan", 
    color: "white",
    model: "Note",
    year: 2007,
    horsePower: 110,
    priceIn$: 3500
}


let carArray=[car1, car2, car3, car4, car5]

let count=0;

for (let i=0; i<carArray.length; i++) {
    if (carArray[i].priceIn$<15000) {  
        console.log (carArray[i].brand + " " + carArray[i].model) 
        count++;
    }   
}
if (count===0){
    console.log ("unfortunately you can't buy the car with this price")  
}
