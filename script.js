var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));
var tip = Number(prompt("How much do you want to leave for a tip? ex. 0.18 for 18%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("How many people? (ex. 2, minimum of 1)"));
console.log(
    `Your meal cost is $${mealCost.toFixed(2)}, and with the tip, it comes to $${total.toFixed(2)}. Your share is $${(total / numOfPeople).toFixed(2)}.`);
    