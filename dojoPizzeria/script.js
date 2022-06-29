function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let pizza1 = pizzaOven("hand tossed", "alfredo", "pepperjack", ["olives", "mushrooms", "pepperoni"]);
console.log(pizza1);

let pizza2 = pizzaOven("thin", "red", "3 cheese", ["jalapenos", "salami", "pineapple"]);
console.log(pizza2);