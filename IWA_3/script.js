// configuration.js

const company = 'ACME Inc.'
const year = 2022
 

// scripts.js
 company = './configuration.js';
 year = './configuration.js'

const message = '©' + company +('year');
document.querySelector('footer').innerText = message



// nwabisa.js

var firstname = "Nwabisa";
var surname = "Gabe";
var role = "CEO"

var display= firstname + surname + ("role");
document.querySelector('nwabisa').innerText = display

// johannes.js

var firstname = "Johannes"
var surname = "Potgieter"
var role = "Intern"

var display= firstname + surname + ("role");
document.querySelector('johannes').innerText = display

// alex.js

var firstname = "Alex"
var surname = "Naidoo"
var role = "Head of Marketing"

var display= firstname + surname +  ("role");
document.querySelector('alex').innerText = display

// scripts.js

console.log('Roles:, nwabisa.role, johanes.role, alex.role')