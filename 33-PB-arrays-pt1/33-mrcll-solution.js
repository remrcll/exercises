'use strict';

//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(euroCities);
console.log(secondItem);

//2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities); 

//3. Print the length of the array "euroCities".

console.log(euroCities.length);

//4. Remove the last item of the array "euroCities".

euroCities.pop();
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);

//6. Bonus: Remove the second and third items from the euroCities array.

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Taipei", "Tbilisi", "Bankok", "Kathmandu", "Socotra"];

//8. Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

//9. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

//10. Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities + asianCities;
console.log(worldCities);