/*
Author: Alexandre Geguchadze
Homework: 3
Date: 20.05.2020
*/

//1)

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

//1.1

function averagePrice (arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i].priceIn$;
    }
    return sum/arr.length;
}

console.log(`Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : ${averagePrice(carArray)}` )

//1.2

function maxPriceInArray (arr) {
let maxPrice = 0;
for (let i=0; i<arr.length; i++) {
    if (arr[i].priceIn$ > maxPrice) {
        maxPrice=arr[i].priceIn$;
    }
} return maxPrice;
} 

console.log(`ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის : ${maxPriceInArray(carArray)}`)


// 2)
    // let username = "alex888";
    // let password = "1888"

    // let user1 = {
    //     username = "giorgi95",
    //     password = "12345678"
    // }

    // let user2 = {
    //     username = "ana82",
    //     password = "geolab1"
    // }

    // let user3 = {
    //     username = "mari2020",
    //     password = "123asd5"
    // }

    // let user4 = {
    //     username = "dato63",
    //     password = "qwerty99"
    // }
