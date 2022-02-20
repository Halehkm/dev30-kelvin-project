// Forcast in kelvin with a constant value.
const kelvin = 293;

//convert temp from kelvin to celsius.
var celsius = kelvin - 273;

// convert temp from celsius to fahrenheit
var fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

var newton = Math.floor(celsius*(33/100)); 
console.log(`The temperature is ${newton} degrees Newton`);
