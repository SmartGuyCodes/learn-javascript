//1. BASIC FUNCTIONS
function sum(a, b){
	return a + b;
}
console.log(sum(1, 4));
console.log(sum(150, 350));

function multiply(a, b){
	return a * b;
}
console.log(multiply(2, 4));
console.log(multiply(3, 2));

//2. STRINGS
function getCharStrength(str){
	return str.length;
}
console.log(getCharStrength('Smart'));
console.log(getCharStrength('Smart Guy Who Codes!'));

function shoutMyName(name){
	return name.toUpperCase();
}
console.log(shoutMyName('charles'));
console.log(shoutMyName('smart guy who codes'));

function lowerName(name){
	return name.toLowerCase();
}
console.log(lowerName('Charles'));
console.log(lowerName('Smart Guy WHo Codes'));
