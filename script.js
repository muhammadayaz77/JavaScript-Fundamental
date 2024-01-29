// Lecture : Value and Varibles

// Step # 01
let country = 'Pakistan';
let continent = 'Asia';
const population = 92000000;
// Step # 02
console.log('Pakistan');
console.log('Asia');
console.log('9200000');

// Lecture : Data Types 

// Step # 01 
let isisland = false; 
let language; 
// Step # 02
console.log('Country : '+country);
console.log('Continent : '+continent);
console.log('Population : '+population);
console.log(isisland);

// Lecture : LET CONST AND VAR 

// Step # 01 
language = 'Pashto';

// Step # 02 
// I change above pop to CONST 

// Step # 03 
// population = population + 1;
// console.log(population);
// It give an Error 


// Lecture : Basic Operators 

// Step # 01 
let halfPop = population/2;
console.log(halfPop); 

// Step # 02
let incPop = population + 1;
console.log(incPop);

// Step # 03 

let finland = 6000000;

if(finland > population)
{
    console.log("Finland pop is More than Pakistan");
}
else 
{
    console.log("Finland pop is less than Pakistan");
}

// Step # 04 

let avg = 3300000;

if(avg > population)
{
    console.log("Pakistan has more pop than average ");
}
else 
{
    console.log("Pakistan has less pop than average");
}

// Step # 05

let description = "Portugal is in Europe, and 11 Million people speaks portugese ";
console.log(description);

// Lecture : String and Template Literals
// Step # 01
description = `Pakistani speaks Urdu`;
console.log(description);

// Lecture : Take Decision If/Else 

// Step # 01 
let Portugal = 2239900000; 

if(Portugal > 33000000)
{
    console.log("Portugal Population is above Average which is "+Portugal);
}
else
{
    console.log("Portugal Population is below Average Which is "+Portugal);
}

// Step # 02
// Change the population temp to 1300
Portugal = 1300;
if(Portugal > 33000000)
{
    console.log("Portugal Population is above Average which is "+Portugal);
}
else
{
    console.log("Portugal Population is below Average Which is "+Portugal);
}
// Lecture : Conversion and Coercoin

console.log('9'-'5'); // 4

console.log('9'-'13'+'17'); // -417

console.log('9'-'13'+ 17); // 13

console.log('157' < 90); // f

console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Step # 02

// I executed and my all Answer was Right 5/5

// Lecture : Equality Operator == vs ===

// Step # 01 

// let numNeighbhours = prompt("How many neighbours contries does your country have ");

// Step # 02 
// if(numNeighbhours == 1)
// {
//     console.log("Only 1 Neighbour");
// }

// Step # 03
// else if(numNeighbhours > 1)
// {
//     console.log("More than One")
// }
// Step # 04
// else
// {
//     console.log("No Border");
// }

// Step # 05 
// I test with value 0 / 1 / more than 1 

// Step # 06 

// Step # 07
// numNeighbhours = Number(numNeighbhours);
// if(numNeighbhours === 1)
// {
//     console.log("Only 1 Neighbour");
// }

// Step # 03
// else if(numNeighbhours > 1)
// {
//     console.log("More than One")
// }
// Step # 04
// else
// {
//     console.log("No Border");
// }

// Step # 06 
// Answer : I execute Else body i think you have to set exact variable 


// Lecture : Logical Operators 

// Step # 02
// Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.

// Step # 04

// population = 13999984;
isisland = true;
language = 'English';

if(population > 13000 && isisland && language == 'English')
{
    console.log("You should live in Portugal :)");
}
else
{
    console.log("Portugal does not meet your criteria :(");
}

// Lecture : The Switch Statement

let No = prompt("Enter Language ...");

switch(No)
{
    case 'Chinese':
    console.log("1");
    break;
    case 'Spanish':
    console.log("2");
    break;
    case 'English':
    console.log("3");
    break;
    case 'Hindi':
    console.log("4");
    break;
    default:
    console.log("Great language too :D'");
    break;
}

// Lecture : Conditional Ternary Operator

// Step # 01 
let res = `Portugal population is ${population > 33000000 ? "above" : "below"} average`;
console.log(res);