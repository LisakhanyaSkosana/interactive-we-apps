// Challenge 1

const difference = 13 - 3
console.log(difference)



// Challenge 2

const nickname= "Timmy";
const firstname = "Timothy";

console.log('Good Morning, ${nickname}; || ${firstname}!')




//Challenge 3







const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '-9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance);
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {leoBalance}";
const sarah = "{sarahName} + {sarahSurname} + \"Owed\" + \"R\" + {sarahBalance}";
const total = "Total amount owed: ";
const result =
 `${leo}
 ${sarah}
 ${divider}
 ${total + owed} 
  ${divider}`

console.log(result)

