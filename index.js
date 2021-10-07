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

function getFirstCharacter(name){
	return name[0];
}
console.log(getFirstCharacter("Nairobi"));
console.log(getFirstCharacter('charles'));

function getLastCharacter(name){
	return  name[name.length - 1];
}
console.log(getLastCharacter("Ricline"));
console.log(getLastCharacter("Amelia"));

function skipFirstCharacter(text){
	return text.substring(1);
}
console.log(skipFirstCharacter("Xcode"));
console.log(skipFirstCharacter("Hello"));

//Project 1
//Complete the function getDescription such that it
//returns the first 10 characters of the text parameter it receives.
function getDescription(text){
	return text.substring(0, 10);
}

//2a. String Concatenation
function concatInitials(firstNameInitial, lastNameInitial){
	return firstNameInitial + lastNameInitial;
}
console.log(concatInitials("S", "G"));


//Project 2
//Complete the function getDescription such that it returns the first 10
//characters of the text parameter it receives followed by an ellipsis. 
//An ellipsis is the dot character written 3 times: ...
function getDesc(text){
	let str = text.substring(0, 10);
	return str + "..."
}



































































































