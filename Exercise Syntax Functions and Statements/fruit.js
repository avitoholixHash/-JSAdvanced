function fruit(fruit, grams, price){
    
    let getKilograms = grams / 1000;
    let totalPrice = getKilograms * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${getKilograms.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);