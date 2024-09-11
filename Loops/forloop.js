const cars = ["Cake", "Fries", "Burger", "Fish", "Beef", "Lamb"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
 
}
document.getElementById("demo").innerHTML = text;
